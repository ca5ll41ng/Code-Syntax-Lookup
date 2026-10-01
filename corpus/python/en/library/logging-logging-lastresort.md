---
id: "python-en-function-logging-lastresort"
language: "python"
lang: "en"
category: "function"
name: "lastResort"
directive: "data"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.lastResort"
license: "PSF"
updated: "2026-10-01"
---

# lastResort

A "handler of last resort" is available through this attribute. This
is a `StreamHandler` writing to `sys.stderr` with a level of
`WARNING`, and is used to handle logging events in the absence of any
logging configuration. The end result is to just print the message to
`sys.stderr`. This replaces the earlier error message saying that
"no handlers could be found for logger XYZ". If you need the earlier
behaviour for some reason, `lastResort` can be set to `None`.

> *Added in 3.2*
