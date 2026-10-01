---
id: "python-zh-function-importlib-resolve_name"
language: "python"
lang: "zh"
category: "function"
name: "resolve_name"
signature: "resolve_name(name, package)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.html#importlib.resolve_name"
license: "PSF"
updated: "2026-10-01"
---

# resolve_name

将模块的相对名称解析为绝对名称。

If  **name** has no leading dots, then **name** is simply returned. This
allows for usage such as
`importlib.util.resolve_name('sys', __spec__.parent)` without doing a
check to see if the **package** argument is needed.

`ImportError` is raised if **name** is a relative module name but
**package** is a false value (e.g. `None` or the empty string).
`ImportError` is also raised if a relative name would escape its
containing package (e.g. requesting `..bacon` from within the `spam`
package).

> *Added in 3.3*

> *Changed in 3.9*: To improve consistency with import statements, raise :exc:`ImportError` instead of :exc:`ValueError` for invalid relative import attempts.
