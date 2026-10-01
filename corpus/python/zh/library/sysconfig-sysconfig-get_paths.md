---
id: "python-zh-function-sysconfig-get_paths"
language: "python"
lang: "zh"
category: "function"
name: "get_paths"
signature: "get_paths([scheme, [vars, [expand]]])"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.get_paths"
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

如果 *expand* 被设为假值，则路径将不会被扩展。

If *scheme* is not an existing scheme, `get_paths` will raise a
`KeyError`.
