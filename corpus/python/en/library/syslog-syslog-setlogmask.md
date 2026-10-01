---
id: "python-en-function-syslog-setlogmask"
language: "python"
lang: "en"
category: "function"
name: "setlogmask"
signature: "setlogmask(maskpri)"
directive: "function"
module: "syslog"
source_url: "https://docs.python.org/3/library/syslog.html#syslog.setlogmask"
license: "PSF"
updated: "2026-10-01"
---

# setlogmask

Set the priority mask to *maskpri* and return the previous mask value.  Calls
to `syslog` with a priority level not set in *maskpri* are ignored.
The default is to log all priorities.  The function `LOG_MASK(pri)`
calculates the mask for the individual priority *pri*.  The function
`LOG_UPTO(pri)` calculates the mask for all priorities up to and including
*pri*.

audit-event:: syslog.setlogmask maskpri syslog.setlogmask
