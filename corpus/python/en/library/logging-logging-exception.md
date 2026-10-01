---
id: "python-en-function-logging-exception"
language: "python"
lang: "en"
category: "function"
name: "exception"
signature: "exception(msg, *args, **kwargs)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.exception"
license: "PSF"
updated: "2026-10-01"
---

# exception

Logs a message with level `ERROR` on the root logger. The arguments and behavior
are otherwise the same as for `debug`. Exception info is added to the logging
message. This function should only be called from an exception handler.
