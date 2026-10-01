---
id: "python-zh-function-test-suppresscrashreport"
language: "python"
lang: "zh"
category: "function"
name: "SuppressCrashReport"
signature: "SuppressCrashReport()"
directive: "class"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.SuppressCrashReport"
license: "PSF"
updated: "2026-10-01"
---

# SuppressCrashReport

A context manager used to try to prevent crash dialog popups on tests that
are expected to crash a subprocess.

On Windows, it disables Windows Error Reporting dialogs using
[SetErrorMode](https://msdn.microsoft.com/en-us/library/windows/desktop/ms680621.aspx).

On UNIX, `resource.setrlimit` is used to set
`resource.RLIMIT_CORE`'s soft limit to 0 to prevent coredump file
creation.

在这两个平台上，旧值都可通过 :meth:`~object.__exit__` 恢复。
