---
id: "python-en-function-pathlib-path-read_bytes"
language: "python"
lang: "en"
category: "function"
name: "Path.read_bytes"
signature: "Path.read_bytes()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.read_bytes"
license: "PSF"
updated: "2026-10-01"
---

# Path.read_bytes

Return the binary contents of the pointed-to file as a bytes object::

   >>> p = Path('my_binary_file')
   >>> p.write_bytes(b'Binary file contents')
   20
   >>> p.read_bytes()
   b'Binary file contents'

> *Added in 3.5*
