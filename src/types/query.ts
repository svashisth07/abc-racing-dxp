export interface PageQueryResponse {
  page: {
    title: string;
    subTitle: string;
    blocks: any[];
    hero: {
      __typename: string;
      video: {
        url: string;
        secure_url: string;
      };
      button: {
        label: string;
        slug: string;
        href: string;
      };
    };
  };
}

export interface SeoQueryResponse {
  page: {
    seo: {
      title: string;
      description: string;
    };
  };
}
