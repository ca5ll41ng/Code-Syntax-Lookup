---
id: "python-en-function-datetime-date-fromordinal"
language: "python"
lang: "en"
category: "function"
name: "date.fromordinal"
signature: "date.fromordinal(ordinal)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.fromordinal"
license: "PSF"
updated: "2026-10-01"
---

# date.fromordinal

Return the date corresponding to the proleptic Gregorian *ordinal*, where
January 1 of year 1 has ordinal 1.

`ValueError` is raised unless `1 <= ordinal <=
date.max.toordinal()`. For any date `d`,
`date.fromordinal(d.toordinal()) == d`.
