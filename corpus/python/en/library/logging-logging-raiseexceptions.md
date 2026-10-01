---
id: "python-en-function-logging-raiseexceptions"
language: "python"
lang: "en"
category: "function"
name: "raiseExceptions"
directive: "data"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.raiseExceptions"
license: "PSF"
updated: "2026-10-01"
---

# raiseExceptions

Used to see if exceptions during handling should be propagated.

Default: `True`.

If `raiseExceptions` is `False`,
exceptions get silently ignored. This is what is mostly wanted
for a logging system - most users will not care about errors in
the logging system, they are more interested in application errors.
