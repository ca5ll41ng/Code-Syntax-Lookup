---
id: "python-en-function-sys-hexversion"
language: "python"
lang: "en"
category: "function"
name: "hexversion"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.hexversion"
license: "PSF"
updated: "2026-10-01"
---

# hexversion

The version number encoded as a single integer.  This is guaranteed to increase
with each version, including proper support for non-production releases.  For
example, to test that the Python interpreter is at least version 1.5.2, use::

   if sys.hexversion >= 0x010502F0:
       # use some advanced feature
       ...
   else:
       # use an alternative implementation or warn the user
       ...

This is called `hexversion` since it only really looks meaningful when viewed
as the result of passing it to the built-in `hex` function.  The
`named tuple`  `sys.version_info` may be used for a more
human-friendly encoding of the same information.

More details of `hexversion` can be found at `apiabiversion`.
