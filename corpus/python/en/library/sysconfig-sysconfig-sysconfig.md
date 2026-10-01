---
id: "python-en-function-sysconfig-sysconfig"
language: "python"
lang: "en"
category: "function"
name: "sysconfig"
title: "Command-line usage"
directive: "module"
module: "sysconfig"
source_url: "https://docs.python.org/3/library/sysconfig.html#module-sysconfig"
license: "PSF"
updated: "2026-10-01"
---

# Command-line usage

.. _sysconfig-cli:
.. _using-sysconfig-as-a-script:

**Command-line usage**

You can use `sysconfig` as a script with Python's *-m* option:

```shell-session

$ python -m sysconfig
Platform: "macosx-10.4-i386"
Python version: "3.2"
Current installation scheme: "posix_prefix"

Paths:
        data = "/usr/local"
        include = "/Users/tarek/Dev/svn.python.org/py3k/Include"
        platinclude = "."
        platlib = "/usr/local/lib/python3.2/site-packages"
        platstdlib = "/usr/local/lib/python3.2"
        purelib = "/usr/local/lib/python3.2/site-packages"
        scripts = "/usr/local/bin"
        stdlib = "/usr/local/lib/python3.2"

Variables:
        AC_APPLE_UNIVERSAL_BUILD = "0"
        AIX_GENUINE_CPLUSPLUS = "0"
        AR = "ar"
        ARFLAGS = "rc"
        ...
```

This call will print in the standard output the information returned by
`get_platform`, `get_python_version`, `get_path` and
`get_config_vars`.
