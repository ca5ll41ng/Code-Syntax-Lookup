---
id: "python-en-function-site-site"
language: "python"
lang: "en"
category: "function"
name: "site"
title: "Command-line interface"
directive: "module"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#module-site"
license: "PSF"
updated: "2026-10-01"
---

# Command-line interface

.. _site-commandline:

**Command-line interface**

program:: site

The `site` module also provides a way to get the user directories from the
command line:

```shell-session

$ python -m site --user-site
/home/user/.local/lib/python3.11/site-packages
```

If it is called without arguments, it will print the contents of
`sys.path` on the standard output, followed by the value of
`USER_BASE` and whether the directory exists, then the same thing for
`USER_SITE`, and finally the value of `ENABLE_USER_SITE`.

option:: --user-base

option:: --user-site

If both options are given, user base and user site will be printed (always in
this order), separated by `os.pathsep`.

If any option is given, the script will exit with one of these values: `0` if
the user site-packages directory is enabled, `1` if it was disabled by the
user, `2` if it is disabled for security reasons or by an administrator, and a
value greater than 2 if there is an error.

> **Seealso**
>
> * PEP 370 -- Per user site-packages directory
> * PEP 829 -- Startup entry points and the deprecation of import lines in `.pth` files
> * `sys-path-init` -- The initialization of `sys.path`.
>
