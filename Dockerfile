FROM node:18-alpine AS deps
LABEL stage=deps
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:18-alpine AS builder
LABEL stage=builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npx nx build arch-epec

FROM node:18-alpine AS runner
LABEL stage=runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=builder /app/dist/apps/arch-epec/next.config.js .
COPY --from=builder /app/dist/apps/arch-epec/package.json .
COPY --from=builder /app/certs/jaas.key ./certs/jaas.key
COPY --from=builder /app/dist/apps/arch-epec/with-nx.js .
COPY --from=builder /app/dist/apps/arch-epec/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/dist/apps/arch-epec/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY ./.env ./.env

EXPOSE 80
ENV PORT 80
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["npm", "run", "start:next"]