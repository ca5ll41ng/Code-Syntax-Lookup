---
id: "python-en-function-sys-monitoring-set_local_events-tool_id-int-code-codetype-event_set-int-none"
language: "python"
lang: "en"
category: "function"
name: "set_local_events(tool_id: int, code: CodeType, event_set: int, /) -> None"
directive: "function"
module: "sys.monitoring"
source_url: "https://docs.python.org/3/library/sys.monitoring.html#sys.monitoring.set_local_events(tool_id: int, code: CodeType, event_set: int, /) -> None"
license: "PSF"
updated: "2026-10-01"
---

# set_local_events(tool_id: int, code: CodeType, event_set: int, /) -> None

Activates all the `local events` for *code*
which are set in *event_set*. Raises a `ValueError` if *tool_id* is not
in use.
