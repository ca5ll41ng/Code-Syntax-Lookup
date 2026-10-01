---
id: "python-en-function-locale-format_string"
language: "python"
lang: "en"
category: "function"
name: "format_string"
signature: "format_string(format, val, grouping=False, monetary=False)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.format_string"
license: "PSF"
updated: "2026-10-01"
---

# format_string

Formats a number *val* according to the current `LC_NUMERIC` setting.
The format follows the conventions of the `%` operator.  For floating-point
values, the decimal point is modified if appropriate.  If *grouping* is `True`,
also takes the grouping into account.

If *monetary* is true, the conversion uses monetary thousands separator and
grouping strings.

Processes formatting specifiers as in `format % val`, but takes the current
locale settings into account.

> *Changed in 3.7*: The *monetary* keyword parameter was added.
