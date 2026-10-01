---
id: "python-en-function-sys-settrace"
language: "python"
lang: "en"
category: "function"
name: "settrace"
signature: "settrace(tracefunc)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.settrace"
license: "PSF"
updated: "2026-10-01"
---

# settrace

Set the system's trace function, which allows you to implement a Python
source code debugger in Python.  The function is thread-specific; for a
debugger to support multiple threads, it must register a trace function using
`settrace` for each thread being debugged or use `threading.settrace`.

Trace functions should have three arguments: *frame*, *event*, and
*arg*. *frame* is the `current stack frame`. *event* is a string: `'call'`,
`'line'`, `'return'`, `'exception'` or `'opcode'`.  *arg* depends on
the event type.

The trace function is invoked (with *event* set to `'call'`) whenever a new
local scope is entered; it should return a reference to a local trace
function to be used for the new scope, or `None` if the scope shouldn't be
traced.

The local trace function should return a reference to itself, or to another
function which would then be used as the local trace function for the scope.

If there is any error occurred in the trace function, it will be unset, just
like `settrace(None)` is called.

> **Note**
>
> Tracing is disabled while calling the trace function (e.g. a function set by
> `settrace`). For recursive tracing see `call_tracing`.
>

The events have the following meaning:

`'call'`
   A function is called (or some other code block entered).  The
   global trace function is called; *arg* is `None`; the return value
   specifies the local trace function.

`'line'`
   The interpreter is about to execute a new line of code or re-execute the
   condition of a loop.  The local trace function is called; *arg* is
   `None`; the return value specifies the new local trace function.  See
   `InternalDocs/code_objects.md` for a detailed explanation of how this
   works.
   Per-line events may be disabled for a frame by setting
   `~frame.f_trace_lines` to `False` on that
   `frame`.

`'return'`
   A function (or other code block) is about to return.  The local trace
   function is called; *arg* is the value that will be returned, or `None`
   if the event is caused by an exception being raised.  The trace function's
   return value is ignored.

`'exception'`
   An exception has occurred.  The local trace function is called; *arg* is a
   tuple `(exception, value, traceback)`; the return value specifies the
   new local trace function.

`'opcode'`
   The interpreter is about to execute a new opcode (see `dis` for
   opcode details).  The local trace function is called; *arg* is
   `None`; the return value specifies the new local trace function.
   Per-opcode events are not emitted by default: they must be explicitly
   requested by setting `~frame.f_trace_opcodes` to `True` on the
   `frame`.

Note that as an exception is propagated down the chain of callers, an
`'exception'` event is generated at each level.

For more fine-grained usage, it's possible to set a trace function by
assigning `frame.f_trace = tracefunc` explicitly, rather than relying on
it being set indirectly via the return value from an already installed
trace function. This is also required for activating the trace function on
the current frame, which `settrace` doesn't do. Note that in order
for this to work, a global tracing function must have been installed
with `settrace` in order to enable the runtime tracing machinery,
but it doesn't need to be the same tracing function (e.g. it could be a
low overhead tracing function that simply returns `None` to disable
itself immediately on each frame).

For more information on code and frame objects, refer to `types`.

audit-event:: sys.settrace "" sys.settrace

impl-detail::

> *Changed in 3.7*: ``'opcode'`` event type added; :attr:`~frame.f_trace_lines` and :attr:`~frame.f_trace_opcodes` attributes added to frames
