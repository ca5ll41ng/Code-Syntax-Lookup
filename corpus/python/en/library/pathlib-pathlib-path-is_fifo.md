---
id: "python-en-function-pathlib-path-is_fifo"
language: "python"
lang: "en"
category: "function"
name: "Path.is_fifo"
signature: "Path.is_fifo()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_fifo"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_fifo

Return `True` if the path points to a FIFO. `False` will be returned if
the path is invalid, inaccessible or missing, or if it points to something
other than a FIFO. Use `Path.stat` to distinguish between these
cases.
