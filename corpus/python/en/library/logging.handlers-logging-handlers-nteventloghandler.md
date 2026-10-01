---
id: "python-en-function-logging-handlers-nteventloghandler"
language: "python"
lang: "en"
category: "function"
name: "NTEventLogHandler"
signature: "NTEventLogHandler(appname, dllname=None, logtype='Application')"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.NTEventLogHandler"
license: "PSF"
updated: "2026-10-01"
---

# NTEventLogHandler

Returns a new instance of the `NTEventLogHandler` class. The *appname* is
used to define the application name as it appears in the event log. An
appropriate registry entry is created using this name. The *dllname* should give
the fully qualified pathname of a .dll or .exe which contains message
definitions to hold in the log (if not specified, `'win32service.pyd'` is used
- this is installed with the Win32 extensions and contains some basic
placeholder message definitions. Note that use of these placeholders will make
your event logs big, as the entire message source is held in the log. If you
want slimmer logs, you have to pass in the name of your own .dll or .exe which
contains the message definitions you want to use in the event log). The
*logtype* is one of `'Application'`, `'System'` or `'Security'`, and
defaults to `'Application'`.

method:: close()

method:: emit(record)

method:: getEventCategory(record)

method:: getEventType(record)

method:: getMessageID(record)
