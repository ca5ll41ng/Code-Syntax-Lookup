---
id: "python-en-function-winreg-connectregistry"
language: "python"
lang: "en"
category: "function"
name: "ConnectRegistry"
signature: "ConnectRegistry(computer_name, key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.ConnectRegistry"
license: "PSF"
updated: "2026-10-01"
---

# ConnectRegistry

Establishes a connection to a predefined registry handle on another computer,
and returns a `handle object`.

*computer_name* is the name of the remote computer, of the form
`r"\\computername"`.  If `None`, the local computer is used.

*key* is the predefined handle to connect to.

The return value is the handle of the opened key. If the function fails, an
`OSError` exception is raised.

audit-event:: winreg.ConnectRegistry computer_name,key winreg.ConnectRegistry

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
