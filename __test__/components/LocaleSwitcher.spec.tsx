import LocaleSwitcher from '@/components/client/LocaleSwitcher';
import { localeNames, locales } from '@i18nconfig';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('LocaleSwitcher', () => {
  test('renders select element with correct options', () => {
    render(<LocaleSwitcher />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole('option');
    expect(optionElements).toHaveLength(locales.length);

    locales.forEach((loc, index) => {
      expect(optionElements[index]).toHaveValue(loc);
      expect(optionElements[index]).toHaveTextContent(localeNames[loc]);
    });
  });

  test('calls router.push with correct path when selecting a locale', () => {
    const mockPush = jest.fn();
    jest.mock('next/navigation', () => ({
      useRouter: () => ({
        push: mockPush,
      }),
    }));

    render(<LocaleSwitcher />);

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'en' } });

    waitFor(() => {
      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/en');
    });
  });
});
