---
id: "python-en-function-datetime-date-fromisoformat"
language: "python"
lang: "en"
category: "function"
name: "date.fromisoformat"
signature: "date.fromisoformat(date_string)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.fromisoformat"
license: "PSF"
updated: "2026-10-01"
---

# date.fromisoformat

Return a `date` corresponding to a *date_string* given in any valid
ISO 8601 format, with the following exceptions:

1. Reduced precision dates are not currently supported (`YYYY-MM`,
   `YYYY`).
2. Extended date representations are not currently supported
   (`±YYYYYY-MM-DD`).
3. Ordinal dates are not currently supported (`YYYY-OOO`).

Examples::

   >>> import datetime as dt
   >>> dt.date.fromisoformat('2019-12-04')
   datetime.date(2019, 12, 4)
   >>> dt.date.fromisoformat('20191204')
   datetime.date(2019, 12, 4)
   >>> dt.date.fromisoformat('2021-W01-1')
   datetime.date(2021, 1, 4)

> *Added in 3.7*

> *Changed in 3.11*: Previously, this method only supported the format ``YYYY-MM-DD``.
