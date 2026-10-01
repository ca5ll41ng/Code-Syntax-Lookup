---
id: "python-en-function-pathlib-path-open"
language: "python"
lang: "en"
category: "function"
name: "Path.open"
signature: "Path.open(mode='r', buffering=-1, encoding=None, errors=None, newline=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.open"
license: "PSF"
updated: "2026-10-01"
---

# Path.open

Open the file pointed to by the path, like the built-in `open`
function does::

   >>> p = Path('setup.py')
   >>> with p.open() as f:
   ...     f.readline()
   ...
   '#!/usr/bin/env python3\n'
