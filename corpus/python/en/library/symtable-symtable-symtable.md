---
id: "python-en-function-symtable-symtable"
language: "python"
lang: "en"
category: "function"
name: "symtable"
title: "Command-Line Usage"
directive: "module"
module: "symtable"
source_url: "https://docs.python.org/3/library/symtable.html#module-symtable"
license: "PSF"
updated: "2026-10-01"
---

# Command-Line Usage

.. _symtable-cli:

**Command-Line Usage**

> *Added in 3.13*

The `symtable` module can be executed as a script from the command line.

```sh

python -m symtable [infile...]
```

Symbol tables are generated for the specified Python source files and
dumped to stdout.
If no input file is specified, the content is read from stdin.
