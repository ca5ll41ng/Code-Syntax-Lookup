---
id: "python-en-function-locale-lc_ctype"
language: "python"
lang: "en"
category: "function"
name: "LC_CTYPE"
directive: "data"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.LC_CTYPE"
license: "PSF"
updated: "2026-10-01"
---

# LC_CTYPE

Locale category for the character type functions.  Most importantly, this
category defines the text encoding, i.e. how bytes are interpreted as
Unicode codepoints.  See PEP 538 and PEP 540 for how this variable
might be automatically coerced to `C.UTF-8` to avoid issues created by
invalid settings in containers or incompatible settings passed over remote
SSH connections.

Python doesn't internally use locale-dependent character transformation functions
from `ctype.h`. Instead, `pyctype.h` provides locale-independent
equivalents like :c`Py_TOLOWER`.
