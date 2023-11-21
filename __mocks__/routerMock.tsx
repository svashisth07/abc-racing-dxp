jest.mock('next-intl', () => ({
  useTranslations: () => jest.fn(),
  useLocale: () => 'en',
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
