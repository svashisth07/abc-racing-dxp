import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export type FixtureProps = {
  id: string;
  title: string;
  thumbnail: {
    secure_url: string;
  };
  date: string;
};

const Fixture = ({ title, thumbnail, date }: FixtureProps) => {
  const locale = useLocale();
  const t = useTranslations();
  const localizedDate = new Date(date).toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="flex flex-col bg-white p-4 rounded-md shadow">
      <Image
        src={thumbnail?.secure_url}
        alt={title}
        width={467}
        height={263}
        priority
        className="w-full h-auto cursor-pointer"
      />
      <div className="flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-bold mt-2 cursor-pointer">{title}</h3>
        <p className="text-gray-600">
          {t('date')}: {localizedDate}
        </p>
      </div>
    </div>
  );
};

export default Fixture;
