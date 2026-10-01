---
id: "python-zh-function-typing-type_check_only"
language: "python"
lang: "zh"
category: "function"
name: "type_check_only"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.type_check_only"
license: "PSF"
updated: "2026-10-01"
---

# type_check_only

将类或函数标记为在运行时不可用的装饰器。

This decorator is itself not available at runtime. It is mainly
intended to mark classes that are defined in type stub files if
an implementation returns an instance of a private class::

   @type_check_only
   class Response:  # private or not available at runtime
       code: int
       def get_header(self, name: str) -> str: ...

   def fetch_response() -> Response: ...

Note that returning instances of private classes is not recommended.
It is usually preferable to make such classes public.
