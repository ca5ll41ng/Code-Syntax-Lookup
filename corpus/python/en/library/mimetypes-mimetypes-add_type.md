---
id: "python-en-function-mimetypes-add_type"
language: "python"
lang: "en"
category: "function"
name: "add_type"
signature: "add_type(type, ext, strict=True)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/3/library/mimetypes.html#mimetypes.add_type"
license: "PSF"
updated: "2026-10-01"
---

# add_type

Add a mapping from the MIME type *type* to the extension *ext*. When the
extension is already known, the new type will replace the old one. When the type
is already known the extension will be added to the list of known extensions.
Valid extensions are empty or start with a `'.'`.

Registered lower-case extensions are matched case-insensitively.

When *strict* is `True` (the default), the mapping will be added to the
official MIME types, otherwise to the non-standard ones.

> *Deprecated since 3.14*: *ext* values that do not start with ``'.'`` are deprecated.

> *Changed in next*: *ext* now must start with ``'.'``. Otherwise :exc:`ValueError` is raised.
