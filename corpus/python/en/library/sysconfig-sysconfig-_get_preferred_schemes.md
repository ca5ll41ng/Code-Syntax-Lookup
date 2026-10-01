---
id: "python-en-function-sysconfig-_get_preferred_schemes"
language: "python"
lang: "en"
category: "function"
name: "_get_preferred_schemes"
signature: "_get_preferred_schemes()"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/3/library/sysconfig.html#sysconfig._get_preferred_schemes"
license: "PSF"
updated: "2026-10-01"
---

# _get_preferred_schemes

Return a dict containing preferred scheme names on the current platform.
Python implementers and redistributors may add their preferred schemes to
the `_INSTALL_SCHEMES` module-level global value, and modify this function
to return those scheme names, to e.g. provide different schemes for system
and language package managers to use, so packages installed by either do not
mix with those by the other.

End users should not use this function, but `get_default_scheme` and
`get_preferred_scheme` instead.

> *Added in 3.10*
