---
id: "python-en-function-logging-bufferingformatter"
language: "python"
lang: "en"
category: "function"
name: "BufferingFormatter"
signature: "BufferingFormatter(linefmt=None)"
directive: "class"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.BufferingFormatter"
license: "PSF"
updated: "2026-10-01"
---

# BufferingFormatter

A base formatter class suitable for subclassing when you want to format a
number of records. You can pass a `Formatter` instance which you want
to use to format each line (that corresponds to a single record). If not
specified, the default formatter (which just outputs the event message) is
used as the line formatter.

method:: formatHeader(records)

method:: formatFooter(records)

method:: format(records)
