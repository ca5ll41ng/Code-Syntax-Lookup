---
id: "python-en-function-test-suppresscrashreport"
language: "python"
lang: "en"
category: "function"
name: "SuppressCrashReport"
signature: "SuppressCrashReport()"
directive: "class"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.SuppressCrashReport"
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

On both platforms, the old value is restored by `~object.__exit__`.
