---
id: "python-en-function-sys-addaudithook"
language: "python"
lang: "en"
category: "function"
name: "addaudithook"
signature: "addaudithook(hook)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.addaudithook"
license: "PSF"
updated: "2026-10-01"
---

# addaudithook

Append the callable *hook* to the list of active auditing hooks for the
current (sub)interpreter.

When an auditing event is raised through the `sys.audit` function, each
hook will be called in the order it was added with the event name and the
tuple of arguments. Native hooks added by :c`PySys_AddAuditHook` are
called first, followed by hooks added in the current (sub)interpreter.  Hooks
can then log the event, raise an exception to abort the operation,
or terminate the process entirely.

Note that audit hooks are primarily for collecting information about internal
or otherwise unobservable actions, whether by Python or libraries written in
Python. They are not suitable for implementing a "sandbox". In particular,
malicious code can trivially disable or bypass hooks added using this
function. At a minimum, any security-sensitive hooks must be added using the
C API :c`PySys_AddAuditHook` before initialising the runtime, and any
modules allowing arbitrary memory modification (such as `ctypes`) should
be completely removed or closely monitored.

audit-event:: sys.addaudithook "" sys.addaudithook

See the `audit events table` for all events raised by
CPython, and PEP 578 for the original design discussion.

> *Added in 3.8*

> *Changed in 3.8.1*: Exceptions derived from :class:`Exception` but not :class:`RuntimeError` are no longer suppressed.

impl-detail::
