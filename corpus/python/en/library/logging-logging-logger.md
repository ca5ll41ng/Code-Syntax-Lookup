---
id: "python-en-function-logging-logger"
language: "python"
lang: "en"
category: "function"
name: "Logger"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.Logger"
license: "PSF"
updated: "2026-10-01"
---

# Logger

attribute:: Logger.name

attribute:: Logger.level

attribute:: Logger.parent

attribute:: Logger.propagate

attribute:: Logger.handlers

attribute:: Logger.disabled

method:: Logger.setLevel(level)

method:: Logger.isEnabledFor(level)

method:: Logger.getEffectiveLevel()

method:: Logger.getChild(suffix)

method:: Logger.getChildren()

method:: Logger.debug(msg, *args, **kwargs)

method:: Logger.info(msg, *args, **kwargs)

method:: Logger.warning(msg, *args, **kwargs)

method:: Logger.error(msg, *args, **kwargs)

method:: Logger.critical(msg, *args, **kwargs)

method:: Logger.log(level, msg, *args, **kwargs)

method:: Logger.exception(msg, *args, **kwargs)

method:: Logger.addFilter(filter)

method:: Logger.removeFilter(filter)

method:: Logger.filter(record)

method:: Logger.addHandler(hdlr)

method:: Logger.removeHandler(hdlr)

method:: Logger.findCaller(stack_info=False, stacklevel=1)

method:: Logger.handle(record)

method:: Logger.makeRecord(name, level, fn, lno, msg, args, exc_info, func=None, extra=None, sinfo=None)

method:: Logger.hasHandlers()

> *Changed in 3.7*: Loggers can now be pickled and unpickled.
