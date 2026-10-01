---
id: "python-en-function-sys-platform"
language: "python"
lang: "en"
category: "function"
name: "platform"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.platform"
license: "PSF"
updated: "2026-10-01"
---

# platform

A string containing a platform identifier. Known values are:

================ ===========================
System           `platform` value
================ ===========================
AIX              `'aix'`
Android          `'android'`
Emscripten       `'emscripten'`
FreeBSD          `'freebsd'`
iOS              `'ios'`
Linux            `'linux'`
macOS            `'darwin'`
Windows          `'win32'`
Windows/Cygwin   `'cygwin'`
WASI             `'wasi'`
================ ===========================

On Unix systems not listed in the table, the value is the lowercased OS name
as returned by `uname -s`, with the first part of the version as returned by
`uname -r` appended, e.g. `'sunos5'`, *at the time when Python was built*.
Unless you want to test for a specific system version, it is therefore
recommended to use the following idiom::

   if sys.platform.startswith('sunos'):
       # SunOS-specific code here...

> *Changed in 3.3*: On Linux, :data:`sys.platform` doesn't contain the major version anymore. It is always ``'linux'``, instead of ``'linux2'`` or ``'linux3'``.

> *Changed in 3.8*: On AIX, :data:`sys.platform` doesn't contain the major version anymore. It is always ``'aix'``, instead of ``'aix5'`` or ``'aix7'``.

> *Changed in 3.13*: On Android, :data:`sys.platform` now returns ``'android'`` rather than ``'linux'``.

> *Changed in 3.14*: On FreeBSD, :data:`sys.platform` doesn't contain the major version anymore. It is always ``'freebsd'``, instead of ``'freebsd13'`` or ``'freebsd14'``.

> **Seealso**
>
> `os.name` has a coarser granularity.  `os.uname` gives
> system-dependent version information.
>
> The `platform` module provides detailed checks for the
> system's identity.
>
