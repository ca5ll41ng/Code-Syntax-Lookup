---
id: "python-en-function-logging-getloggerclass"
language: "python"
lang: "en"
category: "function"
name: "getLoggerClass"
signature: "getLoggerClass()"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.getLoggerClass"
license: "PSF"
updated: "2026-10-01"
---

# getLoggerClass

Return either the standard `Logger` class, or the last class passed to
`setLoggerClass`. This function may be called from within a new class
definition, to ensure that installing a customized `Logger` class will
not undo customizations already applied by other code. For example::

   class MyLogger(logging.getLoggerClass()):
       # ... override behaviour here
