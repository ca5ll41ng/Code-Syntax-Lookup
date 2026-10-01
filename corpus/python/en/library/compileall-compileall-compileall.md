---
id: "python-en-function-compileall-compileall"
language: "python"
lang: "en"
category: "function"
name: "compileall"
title: "To force a recompile of all the `.py` files in the `Lib/`"
directive: "module"
module: "compileall"
source_url: "https://docs.python.org/3/library/compileall.html#module-compileall"
license: "PSF"
updated: "2026-10-01"
---

# To force a recompile of all the `.py` files in the `Lib/`

To force a recompile of all the `.py` files in the `Lib/`
subdirectory and all its subdirectories::

   import compileall

   compileall.compile_dir('Lib/', force=True)

   # Perform same compilation, excluding files in .svn directories.
   import re
   compileall.compile_dir('Lib/', rx=re.compile(r'[/\\][.]svn'), force=True)

   # pathlib.Path objects can also be used.
   import pathlib
   compileall.compile_dir(pathlib.Path('Lib/'), force=True)

> **Seealso**
>
> Module `py_compile`
>    Byte-compile a single source file.
>
