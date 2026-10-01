---
id: "python-en-function-builtins-eval"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B307"],"cwe":["CWE-78"],"note":"Use of possibly insecure function - consider using safer ast.literal_eval."}
name: "eval"
signature: "eval(source, /, globals=None, locals=None)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#eval"
license: "PSF"
updated: "2026-10-01"
---

# eval

:param source:
   A Python expression.
:type source: `str` | `code object`

:param globals:
   The global namespace (default: `None`).
:type globals: `dict`  `frozendict`  `None`

:param locals:
   The local namespace (default: `None`).
:type locals: `mapping` | `None`

:returns: The result of the evaluated expression.
:raises: Syntax errors are reported as exceptions.

> **Warning**
>
> This function executes arbitrary code. Calling it with
> untrusted user-supplied input will lead to security vulnerabilities.
>

The *source* argument is parsed and evaluated as a Python expression
(technically speaking, an `expression list`)
using the *globals* and *locals* mappings as global and local namespace.
If the *globals* dictionary is present and does not contain a value for the
key `__builtins__`, a
reference to the dictionary of the built-in module `builtins` is
inserted under that key before *source* is parsed.
Overriding `__builtins__` can be used to restrict or change the available
names, but this is **not** a security mechanism: the executed code can
still access all builtins.
If the *locals* mapping is omitted it defaults to the
*globals* dictionary.  If both mappings are omitted, the source is
executed with the *globals* and *locals* in the environment where
`eval` is called.  Note, *eval()* will only have access to the
`nested scopes` (non-locals) in the enclosing
environment if they are already referenced in the scope that is calling
`eval` (e.g. via a `nonlocal` statement).

Example:

   >>> x = 1
   >>> eval('x+1')
   2

   >>> eval("1, 2")
   (1, 2)

This function can also be used to execute arbitrary code objects (such as
those created by `compile`).  In this case, pass a code object instead
of a string.  If the code object has been compiled with `'exec'` as the
*mode* argument, `eval`\'s return value will be `None`.

Hints: dynamic execution of statements is supported by the `exec`
function.  The `globals` and `locals` functions
return the current global and local dictionary, respectively, which may be
useful to pass around for use by `eval` or `exec`.

If the given source is a string, then leading and trailing spaces and tabs
are stripped.

See `ast.literal_eval` for a function to evaluate strings
with expressions containing only literals.

audit-event:: exec code_object eval

> *Changed in 3.13*: The *globals* and *locals* arguments can now be passed as keywords.

> *Changed in 3.13*: The semantics of the default *locals* namespace have been adjusted as described for the :func:`locals` builtin.

> *Changed in 3.15*: *globals* can now be a :class:`frozendict`.
