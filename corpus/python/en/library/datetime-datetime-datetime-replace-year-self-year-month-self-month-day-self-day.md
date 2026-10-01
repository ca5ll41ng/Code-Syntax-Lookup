---
id: "python-en-function-datetime-datetime-replace-year-self-year-month-self-month-day-self-day"
language: "python"
lang: "en"
category: "function"
name: "datetime.replace(year=self.year, month=self.month, day=self.day, \\"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.replace(year=self.year, month=self.month, day=self.day, \\"
license: "PSF"
updated: "2026-10-01"
---

# datetime.replace(year=self.year, month=self.month, day=self.day, \

hour=self.hour, minute=self.minute, second=self.second, microsecond=self.microsecond, \
tzinfo=self.tzinfo, *, fold=0)

Return a new `datetime` object with the same attributes, but with
specified parameters updated. Note that `tzinfo=None` can be specified to
create a naive datetime from an aware datetime with no conversion of date
and time data.

`.datetime` objects are also supported by generic function
`copy.replace`.

> *Changed in 3.6*: Added the *fold* parameter.
