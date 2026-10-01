---
id: "python-en-function-logging-formatter"
language: "python"
lang: "en"
category: "function"
name: "Formatter"
signature: "Formatter(fmt=None, datefmt=None, style='%', validate=True, *, defaults=None)"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.Formatter"
license: "PSF"
updated: "2026-10-01"
---

# Formatter

Responsible for converting a `LogRecord` to an output string
to be interpreted by a human or external system.

:param fmt: A format string in the given *style* for
    the logged output as a whole.
    The possible mapping keys are drawn from the `LogRecord` object's
    `logrecord-attributes`.
    If not specified, `'%(message)s'` is used,
    which is just the logged message.
:type fmt: str

:param datefmt: A format string for the date/time portion of the logged output.
    If not specified, the default described in `formatTime` is used.
:type datefmt: str

:param style: Can be one of `'%'`, `'{'` or `'$'` and determines
    how the format string will be merged with its data: using one of
    `old-string-formatting` (`%`), `str.format` (`{`)
    or `string.Template` (`$`). This only applies to
    *fmt* (e.g. `'%(message)s'` versus `'{message}'`),
    not to the actual log messages passed to the logging methods.
    However, there are `other ways`
    to use `{`- and `$`-formatting for log messages.
:type style: str

:param validate: If `True` (the default), incorrect or mismatched
    *fmt* and *style* will raise a `ValueError`; for example,
    `logging.Formatter('%(asctime)s - %(message)s', style='{')`.
:type validate: bool

:param defaults: A dictionary with default values to use in custom fields.
    For example,
    `logging.Formatter('%(ip)s %(message)s', defaults={"ip": None})`
:type defaults: dict[str, typing.Any]

> *Changed in 3.2*: Added the *style* parameter.

> *Changed in 3.8*: Added the *validate* parameter.

> *Changed in 3.10*: Added the *defaults* parameter.

method:: format(record)

method:: formatTime(record, datefmt=None)

method:: formatException(exc_info)

method:: formatStack(stack_info)
