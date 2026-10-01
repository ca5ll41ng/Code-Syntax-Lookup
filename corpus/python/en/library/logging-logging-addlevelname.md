---
id: "python-en-function-logging-addlevelname"
language: "python"
lang: "en"
category: "function"
name: "addLevelName"
signature: "addLevelName(level, levelName)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.addLevelName"
license: "PSF"
updated: "2026-10-01"
---

# addLevelName

Associates level *level* with text *levelName* in an internal dictionary, which is
used to map numeric levels to a textual representation, for example when a
`Formatter` formats a message. This function can also be used to define
your own levels. The only constraints are that all levels used must be
registered using this function, levels should be positive integers and they
should increase in increasing order of severity.

> **Note**
>
> section on `custom-levels`.
>
