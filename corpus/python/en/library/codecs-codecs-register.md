---
id: "python-en-function-codecs-register"
language: "python"
lang: "en"
category: "function"
name: "register"
signature: "register(search_function, /)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.register"
license: "PSF"
updated: "2026-10-01"
---

# register

Register a codec search function. Search functions are expected to take one
argument, being the encoding name in all lower case letters with spaces
converted to hyphens, and return a `CodecInfo` object.
In case a search function cannot find a given encoding, it should return
`None`.
