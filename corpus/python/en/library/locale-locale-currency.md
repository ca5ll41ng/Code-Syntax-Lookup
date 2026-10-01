---
id: "python-en-function-locale-currency"
language: "python"
lang: "en"
category: "function"
name: "currency"
signature: "currency(val, symbol=True, grouping=False, international=False)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.currency"
license: "PSF"
updated: "2026-10-01"
---

# currency

Formats a number *val* according to the current `LC_MONETARY` settings.

The returned string includes the currency symbol if *symbol* is true, which is
the default. If *grouping* is `True` (which is not the default), grouping is done
with the value. If *international* is `True` (which is not the default), the
international currency symbol is used.

> **Note**
>
> This function will not work with the 'C' locale, so you have to set a
> locale via `setlocale` first.
>
