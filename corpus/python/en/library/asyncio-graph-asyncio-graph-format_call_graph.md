---
id: "python-en-function-asyncio-graph-format_call_graph"
language: "python"
lang: "en"
category: "function"
name: "format_call_graph"
signature: "format_call_graph(future=None, /, *, depth=1, limit=None)"
directive: "function"
module: "asyncio-graph"
source_url: "https://docs.python.org/3/library/asyncio-graph.html#asyncio-graph.format_call_graph"
license: "PSF"
updated: "2026-10-01"
---

# format_call_graph

Like `print_call_graph`, but returns a string.
If *future* is `None` and there's no current task,
the function returns an empty string.
