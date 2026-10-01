---
id: "python-en-function-inspect-getfile"
language: "python"
lang: "en"
category: "function"
name: "getfile"
signature: "getfile(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getfile"
license: "PSF"
updated: "2026-10-01"
---

# getfile

Return the name of the (text or binary) file in which an object was defined.
An `OSError` is raised if the source code cannot be retrieved.
This will fail with a `TypeError` if the object is a built-in module,
class, or function.
