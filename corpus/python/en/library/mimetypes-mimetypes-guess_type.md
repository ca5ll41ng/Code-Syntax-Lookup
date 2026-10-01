---
id: "python-en-function-mimetypes-guess_type"
language: "python"
lang: "en"
category: "function"
name: "guess_type"
signature: "guess_type(url, strict=True)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/3/library/mimetypes.html#mimetypes.guess_type"
license: "PSF"
updated: "2026-10-01"
---

# guess_type

Guess the type of a file based on its filename, path or URL, given by *url*.
URL can be a string or a `path-like object`.

The return value is a tuple `(type, encoding)` where *type* is `None` if the
type can't be guessed (missing or unknown suffix) or a string of the form
`'type/subtype'`, usable for a MIME `content-type` header.

*encoding* is `None` for no encoding or the name of the program used to encode
(e.g. `compress` or `gzip`). The encoding is suitable for use
as a `Content-Encoding` header, **not** as a
`Content-Transfer-Encoding` header. The mappings are table driven.
Encoding suffixes are case-sensitive. Suffix mappings and type suffixes are
first tried case-sensitively, then case-insensitively.

The optional *strict* argument is a flag specifying whether the list of known MIME types
is limited to only the official types `registered with IANA
<https://www.iana.org/assignments/media-types/media-types.xhtml>`_.
However, the behavior of this module also depends on the underlying operating
system. Only file types recognized by the OS or explicitly registered with
Python's internal database can be identified. When *strict* is `True` (the
default), only the IANA types are supported; when *strict* is `False`, some
additional non-standard but commonly used MIME types are also recognized.

> *Changed in 3.8*: Added support for *url* being a :term:`path-like object`.

soft-deprecated:: 3.13
