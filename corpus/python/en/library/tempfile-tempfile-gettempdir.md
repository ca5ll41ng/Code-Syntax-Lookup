---
id: "python-en-function-tempfile-gettempdir"
language: "python"
lang: "en"
category: "function"
name: "gettempdir"
signature: "gettempdir()"
directive: "function"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.gettempdir"
license: "PSF"
updated: "2026-10-01"
---

# gettempdir

Return the name of the directory used for temporary files. This
defines the default value for the *dir* argument to all functions
in this module.

Python searches a standard list of directories to find one which
the calling user can create files in.  The list is:

#. The directory named by the `TMPDIR` environment variable.

#. The directory named by the `TEMP` environment variable.

#. The directory named by the `TMP` environment variable.

#. A platform-specific location:

   * On Windows, the directories
     `%USERPROFILE%\\AppData\\Local\\Temp`,
     `%SYSTEMROOT%\\Temp`, `C:\\TEMP`,
     `C:\\TMP`, `\\TEMP`, and
     `\\TMP`, in that order.

   * On all other platforms, the directories `/tmp`, `/var/tmp`, and
     `/usr/tmp`, in that order.

#. As a last resort, the current working directory.

The result of this search is cached, see the description of
`tempdir` below.

> *Changed in 3.10*: Always returns a str.  Previously it would return any :data:`tempdir` value regardless of type so long as it was not ``None``.
