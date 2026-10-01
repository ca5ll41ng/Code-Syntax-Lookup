---
id: "python-en-function-pathlib-path-hardlink_to"
language: "python"
lang: "en"
category: "function"
name: "Path.hardlink_to"
signature: "Path.hardlink_to(target)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.hardlink_to"
license: "PSF"
updated: "2026-10-01"
---

# Path.hardlink_to

Make this path a hard link to the same file as *target*.

> **Note**
>
> The order of arguments (link, target) is the reverse
> of `os.link`'s.
>

> *Added in 3.10*

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` if :func:`os.link` is not available. In previous versions, :exc:`NotImplementedError` was raised.
