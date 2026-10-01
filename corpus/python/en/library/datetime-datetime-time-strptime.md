---
id: "python-en-function-datetime-time-strptime"
language: "python"
lang: "en"
category: "function"
name: "time.strptime"
signature: "time.strptime(date_string, format)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.strptime"
license: "PSF"
updated: "2026-10-01"
---

# time.strptime

Return a `.time` corresponding to *date_string*, parsed according to
*format*.

If *format* does not contain microseconds or timezone information, this is equivalent to::

  time(*(time.strptime(date_string, format)[3:6]))

`ValueError` is raised if the *date_string* and *format*
cannot be parsed by `time.strptime` or if it returns a value which is not a
time tuple.  See also `strftime-strptime-behavior` and
`time.fromisoformat`.

> *Added in 3.14*
