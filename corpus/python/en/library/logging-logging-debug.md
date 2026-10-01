---
id: "python-en-function-logging-debug"
language: "python"
lang: "en"
category: "function"
name: "debug"
signature: "debug(msg, *args, **kwargs)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.debug"
license: "PSF"
updated: "2026-10-01"
---

# debug

This is a convenience function that calls `Logger.debug`, on the root
logger. The handling of the arguments is in every way identical
to what is described in that method.

The only difference is that if the root logger has no handlers, then
`basicConfig` is called, prior to calling `debug` on the root logger.

For very short scripts or quick demonstrations of `logging` facilities,
`debug` and the other module-level functions may be convenient. However,
most programs will want to carefully and explicitly control the logging
configuration, and should therefore prefer creating a module-level logger and
calling `Logger.debug` (or other level-specific methods) on it, as
described at the beginning of this documentation.
