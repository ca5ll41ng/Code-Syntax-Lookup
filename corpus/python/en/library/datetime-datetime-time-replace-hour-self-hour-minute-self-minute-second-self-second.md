---
id: "python-en-function-datetime-time-replace-hour-self-hour-minute-self-minute-second-self-second"
language: "python"
lang: "en"
category: "function"
name: "time.replace(hour=self.hour, minute=self.minute, second=self.second, \\"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.replace(hour=self.hour, minute=self.minute, second=self.second, \\"
license: "PSF"
updated: "2026-10-01"
---

# time.replace(hour=self.hour, minute=self.minute, second=self.second, \

microsecond=self.microsecond, tzinfo=self.tzinfo, *, fold=0)

Return a new `.time` with the same values, but with specified
parameters updated. Note that `tzinfo=None` can be specified to create a
naive `time` from an aware `time`, without conversion of the
time data.

`.time` objects are also supported by generic function
`copy.replace`.

> *Changed in 3.6*: Added the *fold* parameter.
