import { LocaleDirection } from '@i18nconfig';
import { useLocale } from 'next-intl';
import { isRtlLang } from 'rtl-detect';

export default function useTextDirection(): LocaleDirection {
  const locale = useLocale();
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
