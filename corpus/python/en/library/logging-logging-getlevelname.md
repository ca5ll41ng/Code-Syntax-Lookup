---
id: "python-en-function-logging-getlevelname"
language: "python"
lang: "en"
category: "function"
name: "getLevelName"
signature: "getLevelName(level)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.getLevelName"
license: "PSF"
updated: "2026-10-01"
---

# getLevelName

Returns the textual or numeric representation of logging level *level*.

If *level* is one of the predefined levels `CRITICAL`, `ERROR`,
`WARNING`, `INFO` or `DEBUG` then you get the
corresponding string. If you have associated levels with names using
`addLevelName` then the name you have associated with *level* is
returned. If a numeric value corresponding to one of the defined levels is
passed in, the corresponding string representation is returned.

The *level* parameter also accepts a string representation of the level such
as 'INFO'. In such cases, this functions returns the corresponding numeric
value of the level.

If no matching numeric or string value is passed in, the string
'Level %s' % level is returned.

> **Note**
>
> logging logic). This function is used to convert between an integer level
> and the level name displayed in the formatted log output by means of the
> `%(levelname)s` format specifier (see `logrecord-attributes`), and
> vice versa.
>

> *Changed in 3.4*: In Python versions earlier than 3.4, this function could also be passed a text level, and would return the corresponding numeric value of the level. This undocumented behaviour was considered a mistake, and was removed in Python 3.4, but reinstated in 3.4.2 in order to retain backward compatibility.
