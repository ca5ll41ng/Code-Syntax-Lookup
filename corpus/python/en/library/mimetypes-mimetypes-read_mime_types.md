---
id: "python-en-function-mimetypes-read_mime_types"
language: "python"
lang: "en"
category: "function"
name: "read_mime_types"
signature: "read_mime_types(file)"
directive: "function"
module: "mimetypes"
source_url: "https://docs.python.org/3/library/mimetypes.html#mimetypes.read_mime_types"
license: "PSF"
updated: "2026-10-01"
---

# read_mime_types

Load the type map given in the file named by *file*, if it exists.  *file*
must be a string specifying the name of the file to read.  The type map is
returned as a dictionary mapping file extensions, including the leading dot
(`'.'`), to strings of the form `'type/subtype'`.  If the file does not
exist or cannot be read, `None` is returned.
