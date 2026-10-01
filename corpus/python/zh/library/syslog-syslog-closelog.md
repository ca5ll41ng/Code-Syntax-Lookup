---
id: "python-zh-function-syslog-closelog"
language: "python"
lang: "zh"
category: "function"
name: "closelog"
signature: "closelog()"
directive: "function"
module: "syslog"
source_url: "https://docs.python.org/zh-cn/3/library/syslog.html#syslog.closelog"
license: "PSF"
updated: "2026-10-01"
---

# closelog

重置 syslog 模块值并调用系统库 ``closelog()``。

This causes the module to behave as it does when initially imported.  For
example, `openlog` will be called on the first `syslog` call (if
`openlog` hasn't already been called), and *ident* and other
`openlog` parameters are reset to defaults.

audit-event:: syslog.closelog "" syslog.closelog

> *Changed in 3.12*: This function is restricted in subinterpreters. (Only code that runs in multiple interpreters is affected and the restriction is not relevant for most users.) This may only be called in the main interpreter. It will raise :exc:`RuntimeError` if called in a subinterpreter.
