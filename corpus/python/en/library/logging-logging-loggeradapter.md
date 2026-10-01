---
id: "python-en-function-logging-loggeradapter"
language: "python"
lang: "en"
category: "function"
name: "LoggerAdapter"
signature: "LoggerAdapter(logger, extra=None, merge_extra=False)"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.LoggerAdapter"
license: "PSF"
updated: "2026-10-01"
---

# LoggerAdapter

Returns an instance of `LoggerAdapter` initialized with an
underlying `Logger` instance, an optional dict-like object (*extra*),
and an optional boolean (*merge_extra*) indicating whether or not
the *extra* argument of individual log calls should be merged with
the `LoggerAdapter` extra.
The default behavior is to ignore the *extra* argument of individual log
calls and only use the one of the `LoggerAdapter` instance

method:: process(msg, kwargs)

attribute:: manager

attribute:: _log

In addition to the above, `LoggerAdapter` supports the following
methods of `Logger`: `~Logger.debug`, `~Logger.info`,
`~Logger.warning`, `~Logger.error`, `~Logger.exception`,
`~Logger.critical`, `~Logger.log`, `~Logger.isEnabledFor`,
`~Logger.getEffectiveLevel`, `~Logger.setLevel` and
`~Logger.hasHandlers`. These methods have the same signatures as their
counterparts in `Logger`, so you can use the two types of instances
interchangeably.

> *Changed in 3.2*: The :meth:`~Logger.isEnabledFor`, :meth:`~Logger.getEffectiveLevel`, :meth:`~Logger.setLevel` and :meth:`~Logger.hasHandlers` methods were added to :class:`LoggerAdapter`.  These methods delegate to the underlying logger.

> *Changed in 3.6*: Attribute :attr:`!manager` and method :meth:`!_log` were added, which delegate to the underlying logger and allow adapters to be nested.

> *Changed in 3.10*: The *extra* argument is now optional.

> *Changed in 3.13*: The *merge_extra* parameter was added.
