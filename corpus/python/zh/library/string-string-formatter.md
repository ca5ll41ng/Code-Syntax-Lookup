---
id: "python-zh-function-string-formatter"
language: "python"
lang: "zh"
category: "function"
name: "Formatter"
directive: "class"
module: "string"
source_url: "https://docs.python.org/zh-cn/3/library/string.html#string.Formatter"
license: "PSF"
updated: "2026-10-01"
---

# Formatter

:class:`Formatter` 类包含下列公有方法：

method:: format(format_string, /, *args, **kwargs)

method:: vformat(format_string, args, kwargs)

In addition, the `Formatter` defines a number of methods that are
intended to be replaced by subclasses:

method:: parse(format_string)

method:: get_field(field_name, args, kwargs)

method:: get_value(key, args, kwargs)

method:: check_unused_args(used_args, args, kwargs)

method:: format_field(value, format_spec)

method:: convert_field(value, conversion)
