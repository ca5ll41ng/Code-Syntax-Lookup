---
id: "python-en-function-datetime-datetime-fold"
language: "python"
lang: "en"
category: "function"
name: "datetime.fold"
directive: "attribute"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.fold"
license: "PSF"
updated: "2026-10-01"
---

# datetime.fold

In `[0, 1]`. Used to disambiguate wall times during a repeated interval. (A
repeated interval occurs when clocks are rolled back at the end of daylight saving
time or when the UTC offset for the current zone is decreased for political reasons.)
The values 0 and 1 represent, respectively, the earlier and later of the two
moments with the same wall time representation.

> *Added in 3.6*
