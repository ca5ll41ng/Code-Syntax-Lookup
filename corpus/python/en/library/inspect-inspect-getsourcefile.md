---
id: "python-en-function-inspect-getsourcefile"
language: "python"
lang: "en"
category: "function"
name: "getsourcefile"
signature: "getsourcefile(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getsourcefile"
license: "PSF"
updated: "2026-10-01"
---

# getsourcefile

Return the name of the Python source file in which an object was defined
or `None` if no way can be identified to get the source.  An `OSError` is
raised if the source code cannot be retrieved.
This will fail with a `TypeError` if the object is a built-in module,
class, or function.
