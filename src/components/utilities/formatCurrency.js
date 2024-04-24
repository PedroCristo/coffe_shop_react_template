const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
});

export function formatCurrency(value) {
    return CURRENCY_FORMATTER.format(value);
}
