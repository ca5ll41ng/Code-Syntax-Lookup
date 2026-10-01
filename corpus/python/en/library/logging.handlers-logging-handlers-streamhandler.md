---
id: "python-en-function-logging-handlers-streamhandler"
language: "python"
lang: "en"
category: "function"
name: "StreamHandler"
signature: "StreamHandler(stream=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.StreamHandler"
license: "PSF"
updated: "2026-10-01"
---

# StreamHandler

Returns a new instance of the `StreamHandler` class. If *stream* is
specified, the instance will use it for logging output; otherwise, *sys.stderr*
will be used.

method:: emit(record)

method:: flush()

method:: setStream(stream)

attribute:: terminator
