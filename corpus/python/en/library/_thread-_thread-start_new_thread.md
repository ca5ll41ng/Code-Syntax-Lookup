---
id: "python-en-function-_thread-start_new_thread"
language: "python"
lang: "en"
category: "function"
name: "start_new_thread"
signature: "start_new_thread(function, args[, kwargs])"
directive: "function"
module: "_thread"
source_url: "https://docs.python.org/3/library/_thread.html#_thread.start_new_thread"
license: "PSF"
updated: "2026-10-01"
---

# start_new_thread

Start a new thread and return its identifier.  The thread executes the
function *function* with the argument list *args* (which must be a tuple).
The optional *kwargs* argument specifies a dictionary of keyword arguments.

When the function returns, the thread silently exits.

When the function terminates with an unhandled exception,
`sys.unraisablehook` is called to handle the exception. The *object*
attribute of the hook argument is *function*. By default, a stack trace is
printed and then the thread exits (but other threads continue to run).

When the function raises a `SystemExit` exception, it is silently
ignored.

audit-event:: _thread.start_new_thread function,args,kwargs start_new_thread

> *Changed in 3.8*: :func:`sys.unraisablehook` is now used to handle unhandled exceptions.
