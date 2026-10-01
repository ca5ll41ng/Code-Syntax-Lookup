---
id: "python-en-function-datetime-datetime-combine"
language: "python"
lang: "en"
category: "function"
name: "datetime.combine"
signature: "datetime.combine(date, time, tzinfo=time.tzinfo)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.combine"
license: "PSF"
updated: "2026-10-01"
---

# datetime.combine

Return a new `.datetime` object whose date components are equal to the
given `date` object's, and whose time components
are equal to the given `.time` object's. If the *tzinfo*
argument is provided, its value is used to set the `.tzinfo` attribute
of the result, otherwise the `~.time.tzinfo` attribute of the *time* argument
is used.  If the *date* argument is a `datetime` object, its time components
and `.tzinfo` attributes are ignored.

For any `.datetime` object `d`,
`d == datetime.combine(d.date(), d.time(), d.tzinfo)`.

> *Changed in 3.6*: Added the *tzinfo* argument.
