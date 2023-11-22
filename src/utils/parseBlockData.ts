import he from 'he';
import { serialize } from 'next-mdx-remote/serialize';

interface Block {
  subTitle?: string;
  description?: string;
  [key: string]: any;
}

const parseBlocksMdx = async (blocks: Array<Record<string, any>>) =>
  await Promise.all(
    blocks.map(async ({ subTitle, description, ...block }: Block) => ({
      ...(subTitle && {
        markdown: subTitle,
        mdx: await serialize(he.decode(subTitle)),
      }),
      ...(description && {
        description: {
          markdown: description,
          mdx: await serialize(he.decode(description)),
        },
      }),
      ...block,
    }))
  );

export { parseBlocksMdx };
