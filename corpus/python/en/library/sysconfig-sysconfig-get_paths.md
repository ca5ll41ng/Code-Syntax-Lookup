---
id: "python-en-function-sysconfig-get_paths"
language: "python"
lang: "en"
category: "function"
name: "get_paths"
signature: "get_paths([scheme, [vars, [expand]]])"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/3/library/sysconfig.html#sysconfig.get_paths"
license: "PSF"
updated: "2026-10-01"
---

# get_paths

Return a dictionary containing all installation paths corresponding to an
installation scheme. See `get_path` for more information.

If *scheme* is not provided, will use the default scheme for the current
platform.

If *vars* is provided, it must be a dictionary of variables that will
update the dictionary used to expand the paths.

If *expand* is set to false, the paths will not be expanded.

If *scheme* is not an existing scheme, `get_paths` will raise a
`KeyError`.
