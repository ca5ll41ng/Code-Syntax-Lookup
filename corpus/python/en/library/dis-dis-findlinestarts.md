---
id: "python-en-function-dis-findlinestarts"
language: "python"
lang: "en"
category: "function"
name: "findlinestarts"
signature: "findlinestarts(code)"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.findlinestarts"
license: "PSF"
updated: "2026-10-01"
---

# findlinestarts

This generator function uses the `~codeobject.co_lines` method
of the `code object` *code* to find the offsets which
are starts of
lines in the source code.  They are generated as `(offset, lineno)` pairs.

> *Changed in 3.6*: Line numbers can be decreasing. Before, they were always increasing.

> *Changed in 3.10*: The :pep:`626` :meth:`~codeobject.co_lines` method is used instead of the :attr:`~codeobject.co_firstlineno` and :attr:`!codeobject.co_lnotab` attributes of the :ref:`code object <code-objects>`.

> *Changed in 3.13*: Line numbers can be ``None`` for bytecode that does not map to source lines.
