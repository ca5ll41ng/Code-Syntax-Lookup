---
id: "python-en-function-winreg-expandenvironmentstrings"
language: "python"
lang: "en"
category: "function"
name: "ExpandEnvironmentStrings"
signature: "ExpandEnvironmentStrings(str)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.ExpandEnvironmentStrings"
license: "PSF"
updated: "2026-10-01"
---

# ExpandEnvironmentStrings

Expands environment variable placeholders `%NAME%` in strings like
`REG_EXPAND_SZ`::

   >>> ExpandEnvironmentStrings('%windir%')
   'C:\\Windows'

audit-event:: winreg.ExpandEnvironmentStrings str winreg.ExpandEnvironmentStrings
