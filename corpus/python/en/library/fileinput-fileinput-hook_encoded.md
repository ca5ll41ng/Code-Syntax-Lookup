---
id: "python-en-function-fileinput-hook_encoded"
language: "python"
lang: "en"
category: "function"
name: "hook_encoded"
signature: "hook_encoded(encoding, errors=None)"
directive: "function"
module: "fileinput"
source_url: "https://docs.python.org/3/library/fileinput.html#fileinput.hook_encoded"
license: "PSF"
updated: "2026-10-01"
---

# hook_encoded

Returns a hook which opens each file with `open`, using the given
*encoding* and *errors* to read the file.

Usage example: `fi =
fileinput.FileInput(openhook=fileinput.hook_encoded("utf-8",
"surrogateescape"))`

> *Changed in 3.6*: Added the optional *errors* parameter.

> *Deprecated since 3.10*: This function is deprecated since :func:`fileinput.input` and :class:`FileInput` now have *encoding* and *errors* parameters.
