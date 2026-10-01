---
id: "python-en-function-ast-literal_eval"
language: "python"
lang: "en"
category: "function"
name: "literal_eval"
signature: "literal_eval(node_or_string)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.literal_eval"
license: "PSF"
updated: "2026-10-01"
---

# literal_eval

Evaluate an expression node or a string containing only a Python literal or
container display.  The string or node provided may only consist of the
following Python literal structures: strings, bytes, numbers, tuples, lists,
dicts, sets, booleans, `None` and `Ellipsis`.

This can be used for evaluating strings containing Python values without the
need to parse the values oneself.  It is not capable of evaluating
arbitrarily complex expressions, for example involving operators or
indexing.

This function had been documented as "safe" in the past without defining
what that meant. That was misleading. This is specifically designed not to
execute Python code, unlike the more general `eval`. There is no
namespace, no name lookups, or ability to call out. But it is not free from
attack: A relatively small input can lead to memory exhaustion or to C stack
exhaustion, crashing the process. There is also the possibility for
excessive CPU consumption denial of service on some inputs. Calling it on
untrusted data is thus not recommended.

> **Warning**
>
> It is possible to crash the Python interpreter due to stack depth
> limitations in Python's AST compiler.
>
> It can raise `ValueError`, `TypeError`, `SyntaxError`,
> `MemoryError` and `RecursionError` depending on the malformed
> input.
>

> *Changed in 3.2*: Now allows bytes and set literals.

> *Changed in 3.9*: Now supports creating empty sets with ``'set()'``.

> *Changed in 3.10*: For string inputs, leading spaces and tabs are now stripped.
