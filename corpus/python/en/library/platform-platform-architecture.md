---
id: "python-en-function-platform-architecture"
language: "python"
lang: "en"
category: "function"
name: "architecture"
signature: "architecture(executable=sys.executable, bits='', linkage='')"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.architecture"
license: "PSF"
updated: "2026-10-01"
---

# architecture

Queries the given executable (defaults to the Python interpreter binary) for
various architecture information.

Returns a tuple `(bits, linkage)` which contain information about the bit
architecture and the linkage format used for the executable. Both values are
returned as strings.

Values that cannot be determined are returned as given by the parameter presets.
If bits is given as `''`, the `sizeof(pointer)` (or
`sizeof(long)` on Python version < 1.5.2) is used as indicator for the
supported pointer size.

The function relies on the system's `file` command to do the actual work.
This is available on most if not all Unix  platforms and some non-Unix platforms
and then only if the executable points to the Python interpreter.  Reasonable
defaults are used when the above needs are not met.

> **Note**
>
> On macOS (and perhaps other platforms), executable files may be
> universal files containing multiple architectures.
>
> To get at the "64-bitness" of the current interpreter, it is more
> reliable to query the `sys.maxsize` attribute::
>
>    is_64bits = sys.maxsize > 2**32
>
