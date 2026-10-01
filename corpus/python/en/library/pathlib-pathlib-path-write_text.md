---
id: "python-en-function-pathlib-path-write_text"
language: "python"
lang: "en"
category: "function"
name: "Path.write_text"
signature: "Path.write_text(data, encoding=None, errors=None, newline=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.write_text"
license: "PSF"
updated: "2026-10-01"
---

# Path.write_text

Open the file pointed to in text mode, write *data* to it, and close the
file::

   >>> p = Path('my_text_file')
   >>> p.write_text('Text file contents')
   18
   >>> p.read_text()
   'Text file contents'

Return the number of characters written.

An existing file of the same name is overwritten. The optional parameters
have the same meaning as in `open`.

> *Added in 3.5*

> *Changed in 3.10*: The *newline* parameter was added.
