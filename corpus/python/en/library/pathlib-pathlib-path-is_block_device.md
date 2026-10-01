---
id: "python-en-function-pathlib-path-is_block_device"
language: "python"
lang: "en"
category: "function"
name: "Path.is_block_device"
signature: "Path.is_block_device()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_block_device"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_block_device

Return `True` if the path points to a block device. `False` will be
returned if the path is invalid, inaccessible or missing, or if it points
to something other than a block device. Use `Path.stat` to
distinguish between these cases.
