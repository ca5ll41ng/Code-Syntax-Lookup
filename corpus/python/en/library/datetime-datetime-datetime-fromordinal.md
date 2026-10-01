---
id: "python-en-function-datetime-datetime-fromordinal"
language: "python"
lang: "en"
category: "function"
name: "datetime.fromordinal"
signature: "datetime.fromordinal(ordinal)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.fromordinal"
license: "PSF"
updated: "2026-10-01"
---

# datetime.fromordinal

Return the `.datetime` corresponding to the proleptic Gregorian ordinal,
where January 1 of year 1 has ordinal 1. `ValueError` is raised unless
`1 <= ordinal <= datetime.max.toordinal()`. The hour, minute, second and
microsecond of the result are all 0, and `.tzinfo` is `None`.
