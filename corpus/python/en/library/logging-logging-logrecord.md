---
id: "python-en-function-logging-logrecord"
language: "python"
lang: "en"
category: "function"
name: "LogRecord"
signature: "LogRecord(name, level, pathname, lineno, msg, args, exc_info, func=None, sinfo=None)"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.LogRecord"
license: "PSF"
updated: "2026-10-01"
---

# LogRecord

Contains all the information pertinent to the event being logged.

The primary information is passed in *msg* and *args*,
which are combined using `msg % args` to create
the `message` attribute of the record.

:param name: The name of the logger used to log the event
   represented by this `LogRecord`.
   Note that the logger name in the `LogRecord`
   will always have this value,
   even though it may be emitted by a handler
   attached to a different (ancestor) logger.
:type name: str

:param level: The `numeric level` of the logging event
   (such as `10` for `DEBUG`, `20` for `INFO`, etc).
   Note that this is converted to *two* attributes of the LogRecord:
   `levelno` for the numeric value
   and `levelname` for the corresponding level name.
:type level: int

:param pathname: The full string path of the source file
   where the logging call was made.
:type pathname: str

:param lineno: The line number in the source file
   where the logging call was made.
:type lineno: int

:param msg: The event description message,
   which can be a %-format string with placeholders for variable data,
   or an arbitrary object (see `arbitrary-object-messages`).
:type msg: typing.Any

:param args: Variable data to merge into the *msg* argument
   to obtain the event description.
:type args: tuple | dict[str, typing.Any]

:param exc_info: An exception tuple with the current exception information,
   as returned by `sys.exc_info`,
   or `None` if no exception information is available.
:type exc_info: tuple[type[BaseException], BaseException, types.TracebackType] | None

:param func: The name of the function or method
   from which the logging call was invoked.
:type func: str | None

:param sinfo: A text string representing stack information
   from the base of the stack in the current thread,
   up to the logging call.
:type sinfo: str | None

method:: getMessage()

> *Changed in 3.2*: The creation of a :class:`LogRecord` has been made more configurable by providing a factory which is used to create the record. The factory can be set using :func:`getLogRecordFactory` and :func:`setLogRecordFactory` (see this for the factory's signature).

This functionality can be used to inject your own values into a
`LogRecord` at creation time. You can use the following pattern::

   old_factory = logging.getLogRecordFactory()

   def record_factory(*args, **kwargs):
       record = old_factory(*args, **kwargs)
       record.custom_attribute = 0xdecafbad
       return record

   logging.setLogRecordFactory(record_factory)

With this pattern, multiple factories could be chained, and as long
as they don't overwrite each other's attributes or unintentionally
overwrite the standard attributes listed above, there should be no
surprises.
