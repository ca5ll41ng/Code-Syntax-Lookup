---
id: "python-en-function-mimetypes-guess_all_extensions"
language: "python"
lang: "en"
category: "function"
name: "guess_all_extensions"
signature: "guess_all_extensions(type, strict=True)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/3/library/mimetypes.html#mimetypes.guess_all_extensions"
license: "PSF"
updated: "2026-10-01"
---

# guess_all_extensions

Guess the extensions for a file based on its MIME type, given by *type*. The
return value is a list of strings giving all possible filename extensions,
including the leading dot (`'.'`).  The extensions are not guaranteed to have
been associated with any particular data stream, but would be mapped to the MIME
type *type* by `guess_type` and `guess_file_type`.

The optional *strict* argument has the same meaning as with the `guess_type` function.
