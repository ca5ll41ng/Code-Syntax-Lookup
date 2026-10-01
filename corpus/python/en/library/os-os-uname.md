---
id: "python-en-function-os-uname"
language: "python"
lang: "en"
category: "function"
name: "uname"
signature: "uname()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.uname"
license: "PSF"
updated: "2026-10-01"
---

# uname

Returns information identifying the current operating system.
The return value is a `uname_result`.

On macOS, iOS and Android, this returns the *kernel* name and release (i.e.,
`'Darwin'` on macOS and iOS; `'Linux'` on Android). `platform.uname`
can be used to get the user-facing operating system name and release on iOS and
Android.

> **Seealso**
>
> `sys.platform` which has finer granularity.
>
> The `platform` module provides detailed checks for the
> system's identity.
>

availability:: Unix.

> *Changed in 3.3*: Return type changed from a tuple to a tuple-like object with named attributes.
