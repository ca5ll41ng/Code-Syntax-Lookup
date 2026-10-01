---
id: "python-zh-function-sysconfig-get_path"
language: "python"
lang: "zh"
category: "function"
name: "get_path"
signature: "get_path(name, [scheme, [vars, [expand]]])"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.get_path"
license: "PSF"
updated: "2026-10-01"
---

# get_path

Return an installation path corresponding to the path *name*, from the
install scheme named *scheme*.

*name* 必须是一个来自 :func:`get_path_names` 所返回的列表的值。

`sysconfig` stores installation paths corresponding to each path name,
for each platform, with variables to be expanded.  For instance the *stdlib*
path for the *nt* scheme is: `{base}/Lib`.

`get_path` will use the variables returned by `get_config_vars`
to expand the path.  All variables have default values for each platform so
one may call this function and get the default value.

If *scheme* is provided, it must be a value from the list returned by
`get_scheme_names`.  Otherwise, the default scheme for the current
platform is used.

If *vars* is provided, it must be a dictionary of variables that will update
the dictionary returned by `get_config_vars`.

If *expand* is set to `False`, the path will not be expanded using the
variables.

如果 *name* 未找到，则会引发 :exc:`KeyError`。
