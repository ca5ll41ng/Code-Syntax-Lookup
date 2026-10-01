---
id: "python-en-function-asyncio-graph-capture_call_graph"
language: "python"
lang: "en"
category: "function"
name: "capture_call_graph"
signature: "capture_call_graph(future=None, /, *, depth=1, limit=None)"
directive: "function"
module: "asyncio-graph"
source_url: "https://docs.python.org/3/library/asyncio-graph.html#asyncio-graph.capture_call_graph"
license: "PSF"
updated: "2026-10-01"
---

# capture_call_graph

Capture the async call graph for the current task or the provided
`Task` or `Future`.

The function receives an optional *future* argument.
If not passed, the current running task will be used. If there's no
current task, the function returns `None`.

If the function is called on *the current task*, the optional
keyword-only *depth* argument can be used to skip the specified
number of frames from top of the stack.

Returns a `FutureCallGraph` data class object:

* `FutureCallGraph(future, call_stack, awaited_by)`

   Where *future* is a reference to a `Future` or
   a `Task` (or their subclasses.)

   `call_stack` is a tuple of `FrameCallGraphEntry` objects.

   `awaited_by` is a tuple of `FutureCallGraph` objects.

* `FrameCallGraphEntry(frame)`

   Where *frame* is a frame object of a regular Python function
   in the call stack.
