---
id: "python-zh-function-sysconfig-get_config_vars"
language: "python"
lang: "zh"
category: "function"
name: "get_config_vars"
signature: "get_config_vars(*args)"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.get_config_vars"
license: "PSF"
updated: "2026-10-01"
---

# get_config_vars

With no arguments, return a dictionary of all configuration variables
relevant for the current platform.

With arguments, return a list of values that result from looking up each
argument in the configuration variable dictionary.

对于每个参数，如果未找到值，则返回 ``None``。
