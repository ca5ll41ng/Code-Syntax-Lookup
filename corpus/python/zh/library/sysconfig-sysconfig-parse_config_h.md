---
id: "python-zh-function-sysconfig-parse_config_h"
language: "python"
lang: "zh"
category: "function"
name: "parse_config_h"
signature: "parse_config_h(fp[, vars])"
directive: "function"
module: "sysconfig"
source_url: "https://docs.python.org/zh-cn/3/library/sysconfig.html#sysconfig.parse_config_h"
license: "PSF"
updated: "2026-10-01"
---

# parse_config_h

解析一个 :file:`config.h` 风格的文件。

*fp* 是一个指向 :file:`config.h` 风格的文件的文件型对象。

A dictionary containing name/value pairs is returned.  If an optional
dictionary is passed in as the second argument, it is used instead of a new
dictionary, and updated with the values read in the file.
