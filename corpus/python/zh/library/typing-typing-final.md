---
id: "python-zh-function-typing-final"
language: "python"
lang: "zh"
category: "function"
name: "Final"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Final"
license: "PSF"
updated: "2026-10-01"
---

# Final

特殊类型注解构造，用于向类型检查器表示最终名称。

Final names cannot be reassigned in any scope. Final names declared in class
scopes cannot be overridden in subclasses.

例如：

   MAX_SIZE: Final = 9000
   MAX_SIZE += 1  # Error reported by type checker

   class Connection:
       TIMEOUT: Final[int] = 10

   class FastConnector(Connection):
       TIMEOUT = 1  # Error reported by type checker

There is no runtime checking of these properties. See PEP 591 for
more details.

> *Added in 3.8*

> *Changed in 3.13*: :data:`Final` can now be nested in :data:`ClassVar` and vice versa.
