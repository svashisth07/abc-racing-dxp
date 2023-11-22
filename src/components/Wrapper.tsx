import * as Blocks from '@blocks';

export default function Wrapper({ blocks }: { blocks: Array<any> }) {
  return (
    <>
      {blocks.map((block: any) => {
        const Component = Blocks[block.__typename as keyof typeof Blocks];

        if (!Component) return null;

        return <Component key={block.id} {...block} />;
      })}
    </>
  );
}
