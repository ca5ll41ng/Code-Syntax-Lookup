---
id: "python-en-function-telnetlib-telnetlib"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B401"],"cwe":["CWE-319"],"note":"A telnet-related module is being imported.  Telnet is considered insecure. Use SSH or some other encrypted protocol."}
name: "telnetlib"
title: "`telnetlib` --- Telnet client"
directive: "module"
module: "telnetlib"
source_url: "https://docs.python.org/3/library/telnetlib.html#module-telnetlib"
license: "PSF"
updated: "2026-10-01"
---

# `telnetlib` --- Telnet client

**`telnetlib` --- Telnet client**

deprecated-removed:: 3.11 3.13

This module is no longer part of the Python standard library.
It was `removed in Python 3.13` after
being deprecated in Python 3.11.  The removal was decided in PEP 594.

Possible replacements are third-party libraries from PyPI: `telnetlib3`
or `Exscript`.  These are not supported or maintained by the Python core
team.

The last version of Python that provided the `telnetlib` module was
[Python 3.12](https://docs.python.org/3.12/library/telnetlib.html).
