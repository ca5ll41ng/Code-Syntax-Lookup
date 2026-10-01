---
id: "python-en-function-builtins-contextmanager-__exit__"
language: "python"
lang: "en"
category: "function"
name: "contextmanager.__exit__"
signature: "contextmanager.__exit__(exc_type, exc_val, exc_tb)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#contextmanager.__exit__"
license: "PSF"
updated: "2026-10-01"
---

# contextmanager.__exit__

Exit the runtime context and return a Boolean flag indicating if any exception
that occurred should be suppressed. If an exception occurred while executing the
body of the `with` statement, the arguments contain the exception type,
value and traceback information. Otherwise, all three arguments are `None`.

Returning a true value from this method will cause the `with` statement
to suppress the exception and continue execution with the statement immediately
following the `with` statement. Otherwise the exception continues
propagating after this method has finished executing.

If this method raises an exception while handling an earlier exception from the
`with` block, the new exception is raised, and the original exception
is stored in its `~BaseException.__context__` attribute.

The exception passed in should never be reraised explicitly - instead, this
method should return a false value to indicate that the method completed
successfully and does not want to suppress the raised exception. This allows
context management code to easily detect whether or not an `~object.__exit__`
method has actually failed.
