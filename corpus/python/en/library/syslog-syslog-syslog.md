---
id: "python-en-function-syslog-syslog"
language: "python"
lang: "en"
category: "function"
name: "syslog"
title: "Examples"
directive: "module"
module: "syslog"
source_url: "https://docs.python.org/3/library/syslog.html#module-syslog"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

**Simple example**

A simple set of examples::

   import syslog

   syslog.syslog('Processing started')
   if error:
       syslog.syslog(syslog.LOG_ERR, 'Processing started')

An example of setting some log options, these would include the process ID in
logged messages, and write the messages to the destination facility used for
mail logging::

   syslog.openlog(logoption=syslog.LOG_PID, facility=syslog.LOG_MAIL)
   syslog.syslog('E-mail processing initiated...')
