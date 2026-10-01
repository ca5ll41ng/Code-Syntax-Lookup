---
id: "python-en-function-sys-monitoring-free_tool_id-tool_id-int-none"
language: "python"
lang: "en"
category: "function"
name: "free_tool_id(tool_id: int, /) -> None"
directive: "function"
module: "sys.monitoring"
source_url: "https://docs.python.org/3/library/sys.monitoring.html#sys.monitoring.free_tool_id(tool_id: int, /) -> None"
license: "PSF"
updated: "2026-10-01"
---

# free_tool_id(tool_id: int, /) -> None

Should be called once a tool no longer requires *tool_id*.
Will call `clear_tool_id` before releasing *tool_id*.

> *Changed in 3.14*: Now calls :func:`clear_tool_id` before releasing *tool_id*. Previously, it would not disable global or local events associated with *tool_id*, nor unregister any callback functions.
