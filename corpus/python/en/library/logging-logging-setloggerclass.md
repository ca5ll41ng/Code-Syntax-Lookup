---
id: "python-en-function-logging-setloggerclass"
language: "python"
lang: "en"
category: "function"
name: "setLoggerClass"
signature: "setLoggerClass(klass)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.setLoggerClass"
license: "PSF"
updated: "2026-10-01"
---

# setLoggerClass

Tells the logging system to use the class *klass* when instantiating a logger.
The class should define `__init__` such that only a name argument is
required, and the `__init__` should call `Logger.__init__`. This
function is typically called before any loggers are instantiated by applications
which need to use custom logger behavior. After this call, as at any other
time, do not instantiate loggers directly using the subclass: continue to use
the `logging.getLogger` API to get your loggers.
