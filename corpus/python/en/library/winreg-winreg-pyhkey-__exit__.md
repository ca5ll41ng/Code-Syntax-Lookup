---
id: "python-en-function-winreg-pyhkey-__exit__"
language: "python"
lang: "en"
category: "function"
name: "PyHKEY.__exit__"
signature: "PyHKEY.__exit__(*exc_info)"
directive: "method"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.PyHKEY.__exit__"
license: "PSF"
updated: "2026-10-01"
---

# PyHKEY.__exit__

The HKEY object implements `~object.__enter__` and
`~object.__exit__` and thus supports the context protocol for the
`with` statement::

   with OpenKey(HKEY_LOCAL_MACHINE, "foo") as key:
       ...  # work with key

will automatically close *key* when control leaves the `with` block.
