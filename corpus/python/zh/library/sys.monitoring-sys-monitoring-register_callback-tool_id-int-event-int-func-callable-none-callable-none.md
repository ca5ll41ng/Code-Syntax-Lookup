---
id: "python-zh-function-sys-monitoring-register_callback-tool_id-int-event-int-func-callable-none-callable-none"
language: "python"
lang: "zh"
category: "function"
name: "register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None"
directive: "function"
module: "sys.monitoring"
source_url: "https://docs.python.org/zh-cn/3/library/sys.monitoring.html#sys.monitoring.register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None"
license: "PSF"
updated: "2026-10-01"
---

# register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None

使用给定的 *tool_id* 为 *event* 注册可调用对象 *func*

If another callback was registered for the given *tool_id* and *event*,
it is unregistered and returned.
Otherwise `register_callback` returns `None`.

audit-event:: sys.monitoring.register_callback func sys.monitoring.register_callback
