---
id: "python-zh-function-sysconfig-get_config_var"
language: "python"
lang: "zh"
category: "function"
name: "get_config_var"
signature: "get_config_var(name)"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.get_config_var"
license: "PSF"
updated: "2026-10-01"
---

# get_config_var

Return the value of a single variable *name*. Equivalent to
`get_config_vars().get(name)`.

如果未找到 *name*，则返回 ``None``。
