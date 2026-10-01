---
id: "python-en-function-ast-ast"
language: "python"
lang: "en"
category: "function"
name: "ast"
title: "Command-line usage"
directive: "module"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#module-ast"
license: "PSF"
updated: "2026-10-01"
---

# Command-line usage

.. _ast-cli:

**Command-line usage**

> *Added in 3.9*

> *Changed in 3.15*: The output is now syntax highlighted by default. This can be :ref:`controlled using environment variables <using-on-controlling-color>`.

The `ast` module can be executed as a script from the command line.
It is as simple as:

```sh

python -m ast [-m <mode>] [-a] [infile]
```

The following options are accepted:

program:: ast

option:: -h, --help

option:: -m <mode>

option:: --no-type-comments

option:: -a, --include-attributes

option:: -i <indent>

option:: --feature-version <version>

option:: -O <level>

option:: --show-empty

If `infile` is specified its contents are parsed to AST and dumped
to stdout.  Otherwise, the content is read from stdin.

> **Seealso**
>
> [Green Tree Snakes](https://greentreesnakes.readthedocs.io/), an external
> documentation resource, has good details on working with Python ASTs.
>
> [ASTTokens](https://asttokens.readthedocs.io/en/latest/user-guide.html)
> annotates Python ASTs with the positions of tokens and text in the source
> code that generated them. This is helpful for tools that make source code
> transformations.
>
> [leoAst.py](https://leo-editor.github.io/leo-editor/appendices.html#leoast-py)
> unifies the
> token-based and parse-tree-based views of python programs by inserting
> two-way links between tokens and ast nodes.
>
> [LibCST](https://libcst.readthedocs.io/) parses code as a Concrete Syntax
> Tree that looks like an ast tree and keeps all formatting details. It's
> useful for building automated refactoring (codemod) applications and
> linters.
>
> [Parso](https://parso.readthedocs.io) is a Python parser that supports
> error recovery and round-trip parsing for different Python versions (in
> multiple Python versions). Parso is also able to list multiple syntax errors
> in your Python file.
>
