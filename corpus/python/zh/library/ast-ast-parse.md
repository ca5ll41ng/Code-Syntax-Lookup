---
id: "python-zh-function-ast-parse"
language: "python"
lang: "zh"
category: "function"
name: "parse"
signature: "parse(source, filename='<unknown>', mode='exec', *, type_comments=False, feature_version=None, optimize=-1, module=None)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.parse"
license: "PSF"
updated: "2026-10-01"
---

# parse

Parse the source into an AST node.  Equivalent to `compile(source,
filename, mode, flags=FLAGS_VALUE, optimize=optimize, module=module)`,
where `FLAGS_VALUE` is `ast.PyCF_ONLY_AST` if `optimize <= 0`
and `ast.PyCF_OPTIMIZED_AST` otherwise.

If `type_comments=True` is given, the parser is modified to check
and return type comments as specified by PEP 484 and PEP 526.
This is equivalent to adding `ast.PyCF_TYPE_COMMENTS` to the
flags passed to `compile`.  This will report syntax errors
for misplaced type comments.  Without this flag, type comments will
be ignored, and the `type_comment` field on selected AST nodes
will always be `None`.  In addition, the locations of `# type:
ignore` comments will be returned as the `type_ignores`
attribute of `Module` (otherwise it is always an empty list).

In addition, if `mode` is `'func_type'`, the input syntax is
modified to correspond to PEP 484 "signature type comments",
for example `(str, int) -> List[str]`.

Setting `feature_version` to a tuple `(major, minor)` will result in
a "best-effort" attempt to parse using that Python version's grammar.
For example, setting `feature_version=(3, 9)` will attempt to disallow
parsing of `match` statements.
Currently `major` must equal to `3`. The lowest supported version is
`(3, 7)` (and this may increase in future Python versions);
the highest is `sys.version_info[0:2]`. "Best-effort" attempt means there
is no guarantee that the parse (or success of the parse) is the same as
when run on the Python version corresponding to `feature_version`.

如果源包含一个空字符 (``\0``)，则会引发 :exc:`ValueError`。

> **Warning**
>
> Note that successfully parsing source code into an AST object doesn't
> guarantee that the source code provided is valid Python code that can
> be executed as the compilation step can raise further `SyntaxError`
> exceptions. For instance, the source `return 42` generates a valid
> AST node for a return statement, but it cannot be compiled alone (it needs
> to be inside a function node).
>
> In particular, `ast.parse` won't do any scoping checks, which the
> compilation step does.
>

> **Warning**
>
> It is possible to crash the Python interpreter with a
> sufficiently large/complex string due to stack depth limitations
> in Python's AST compiler.
>

> *Changed in 3.8*: Added ``type_comments``, ``mode='func_type'`` and ``feature_version``.

> *Changed in 3.13*: The minimum supported version for ``feature_version`` is now ``(3, 7)``. The ``optimize`` argument was added.

> *Added in 3.15*: Added the *module* parameter.
