import { PageQueryResponse } from '@/types/query';
import { parseBlocksMdx } from './parseBlockData';

const parsePageData = async ({
  page: { blocks, ...rest },
}: PageQueryResponse) => ({
  ...(blocks && {
    blocks: await parseBlocksMdx(blocks),
  }),
  ...rest,
});

export { parsePageData };
