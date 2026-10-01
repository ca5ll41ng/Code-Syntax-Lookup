---
id: "python-en-function-logging-shutdown"
language: "python"
lang: "en"
category: "function"
name: "shutdown"
signature: "shutdown()"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.shutdown"
license: "PSF"
updated: "2026-10-01"
---

# shutdown

Informs the logging system to perform an orderly shutdown by flushing and
closing all handlers. This should be called at application exit and no
further use of the logging system should be made after this call.

When the logging module is imported, it registers this function as an exit
handler (see `atexit`), so normally there's no need to do that
manually.
