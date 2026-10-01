---
id: "python-en-function-sys-winver"
language: "python"
lang: "en"
category: "function"
name: "winver"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.winver"
license: "PSF"
updated: "2026-10-01"
---

# winver

The version number used to form registry keys on Windows platforms. This is
stored as string resource 1000 in the Python DLL.  The value is normally the
major and minor versions of the running Python interpreter.  It is provided in the `sys`
module for informational purposes; modifying this value has no effect on the
registry keys used by Python.

availability:: Windows.
