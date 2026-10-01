---
id: "python-en-function-sys-monitoring-use_tool_id-tool_id-int-name-str-none"
language: "python"
lang: "en"
category: "function"
name: "use_tool_id(tool_id: int, name: str, /) -> None"
directive: "function"
module: "sys.monitoring"
source_url: "https://docs.python.org/3/library/sys.monitoring.html#sys.monitoring.use_tool_id(tool_id: int, name: str, /) -> None"
license: "PSF"
updated: "2026-10-01"
---

# use_tool_id(tool_id: int, name: str, /) -> None

Must be called before *tool_id* can be used.
*tool_id* must be in the range 0 to 5 inclusive.
Raises a `ValueError` if *tool_id* is in use.
