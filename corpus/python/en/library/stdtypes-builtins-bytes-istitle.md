---
id: "python-en-function-builtins-bytes-istitle"
language: "python"
lang: "en"
category: "function"
name: "bytes.istitle"
signature: "bytes.istitle()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.istitle"
license: "PSF"
updated: "2026-10-01"
---

# bytes.istitle

Return `True` if the sequence is ASCII titlecase and the sequence is not
empty, `False` otherwise. See `bytes.title` for more details on the
definition of "titlecase".

For example::

   >>> b'Hello World'.istitle()
   True
   >>> b'Hello world'.istitle()
   False
