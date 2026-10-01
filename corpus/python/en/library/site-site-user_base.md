---
id: "python-en-function-site-user_base"
language: "python"
lang: "en"
category: "function"
name: "USER_BASE"
directive: "data"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.USER_BASE"
license: "PSF"
updated: "2026-10-01"
---

# USER_BASE

Path to the base directory for the user site-packages.  Can be `None` if
`getuserbase` hasn't been called yet.  Default value is
`~/.local` for UNIX and macOS non-framework builds,
`~/Library/Python/{X.Y}` for macOS framework builds, and
`{%APPDATA%}\\Python` for Windows.  This value is used to
compute the installation directories for scripts, data files, Python modules,
etc. for the `user installation scheme`.
See also `PYTHONUSERBASE`.
