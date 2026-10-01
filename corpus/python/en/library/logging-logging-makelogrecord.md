---
id: "python-en-function-logging-makelogrecord"
language: "python"
lang: "en"
category: "function"
name: "makeLogRecord"
signature: "makeLogRecord(attrdict)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.makeLogRecord"
license: "PSF"
updated: "2026-10-01"
---

# makeLogRecord

Creates and returns a new `LogRecord` instance whose attributes are
defined by *attrdict*. This function is useful for taking a pickled
`LogRecord` attribute dictionary, sent over a socket, and reconstituting
it as a `LogRecord` instance at the receiving end.
