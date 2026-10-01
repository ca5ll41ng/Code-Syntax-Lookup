---
id: "python-en-function-sys-monitoring-register_callback-tool_id-int-event-int-func-callable-none-callable-none"
language: "python"
lang: "en"
category: "function"
name: "register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None"
directive: "function"
module: "sys.monitoring"
source_url: "https://docs.python.org/3/library/sys.monitoring.html#sys.monitoring.register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None"
license: "PSF"
updated: "2026-10-01"
---

# register_callback(tool_id: int, event: int, func: Callable | None, /) -> Callable | None

Registers the callable *func* for the *event* with the given *tool_id*

If another callback was registered for the given *tool_id* and *event*,
it is unregistered and returned.
Otherwise `register_callback` returns `None`.

audit-event:: sys.monitoring.register_callback func sys.monitoring.register_callback
