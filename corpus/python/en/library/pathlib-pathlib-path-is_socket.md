---
id: "python-en-function-pathlib-path-is_socket"
language: "python"
lang: "en"
category: "function"
name: "Path.is_socket"
signature: "Path.is_socket()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_socket"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_socket

Return `True` if the path points to a Unix socket. `False` will be
returned if the path is invalid, inaccessible or missing, or if it points
to something other than a Unix socket. Use `Path.stat` to
distinguish between these cases.
