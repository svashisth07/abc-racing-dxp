'use client';
import { Locale, localeNames, locales } from '@i18nconfig';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/${e.target.value}`);
  };
  return (
    <div className="">
      <select
        value={locale}
        onChange={switchLocale}
        className="px-2 py-1 border rounded mr-2"
      >
        {locales.map((loc: Locale) => (
          <option
            key={loc}
            value={loc}
            className="text-white hover:bg-gray-200"
          >
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
