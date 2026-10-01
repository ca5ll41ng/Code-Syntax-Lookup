---
id: "python-en-function-builtins-generator-__next__"
language: "python"
lang: "en"
category: "function"
name: "generator.__next__"
signature: "generator.__next__()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#generator.__next__"
license: "PSF"
updated: "2026-10-01"
---

# generator.__next__

Starts the execution of a generator function or resumes it at the
`yield expression` where the function is currently suspended.
When a generator function is resumed with a `~generator.__next__`
method, the current yield expression always evaluates to `None`.
The execution then continues to the next yield expression, where the
generator is suspended again, and the value of the expression after the
`yield` keyword is returned to `~generator.__next__`'s
caller.
If the generator exits without yielding another value,
`~generator.__next__` raises a `StopIteration` exception,
signalling that iteration has completed.

This method is normally called implicitly, for example by a `for`
loop, or by the built-in `next` function.
