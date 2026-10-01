---
id: "python-en-function-getpass-getuser"
language: "python"
lang: "en"
category: "function"
name: "getuser"
signature: "getuser()"
directive: "function"
module: "getpass"
source_url: "https://docs.python.org/3/library/getpass.html#getpass.getuser"
license: "PSF"
updated: "2026-10-01"
---

# getuser

Return the "login name" of the user.

This function checks the environment variables `LOGNAME`,
`USER`, `LNAME` and `USERNAME`, in order, and
returns the value of the first one which is set to a non-empty string.  If
none are set, the login name from the password database is returned on
systems which support the `pwd` module, otherwise, an `OSError`
is raised.

In general, this function should be preferred over `os.getlogin`.

> *Changed in 3.13*: Previously, various exceptions beyond just :exc:`OSError` were raised.
