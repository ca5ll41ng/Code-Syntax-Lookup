---
id: "python-en-function-datetime-date-toordinal"
language: "python"
lang: "en"
category: "function"
name: "date.toordinal"
signature: "date.toordinal()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.toordinal"
license: "PSF"
updated: "2026-10-01"
---

# date.toordinal

Return the proleptic Gregorian ordinal of the date, where January 1 of year 1
has ordinal 1. For any `date` object `d`,
`date.fromordinal(d.toordinal()) == d`.
