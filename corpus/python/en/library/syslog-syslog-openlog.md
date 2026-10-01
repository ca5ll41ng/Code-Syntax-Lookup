---
id: "python-en-function-syslog-openlog"
language: "python"
lang: "en"
category: "function"
name: "openlog"
signature: "openlog([ident[, logoption[, facility]]])"
directive: "function"
module: "syslog"
source_url: "https://docs.python.org/3/library/syslog.html#syslog.openlog"
license: "PSF"
updated: "2026-10-01"
---

# openlog

Logging options of subsequent `syslog` calls can be set by calling
`openlog`.  `syslog` will call `openlog` with no arguments
if the log is not currently open.

The optional *ident* keyword argument is a string which is prepended to every
message, and defaults to `sys.argv[0]` with leading path components
stripped.  The optional *logoption* keyword argument (default is 0) is a bit
field -- see below for possible values to combine.  The optional *facility*
keyword argument (default is `LOG_USER`) sets the default facility for
messages which do not have a facility explicitly encoded.

audit-event:: syslog.openlog ident,logoption,facility syslog.openlog

> *Changed in 3.2*: In previous versions, keyword arguments were not allowed, and *ident* was required.

> *Changed in 3.12*: This function is restricted in subinterpreters. (Only code that runs in multiple interpreters is affected and the restriction is not relevant for most users.) This may only be called in the main interpreter. It will raise :exc:`RuntimeError` if called in a subinterpreter.
