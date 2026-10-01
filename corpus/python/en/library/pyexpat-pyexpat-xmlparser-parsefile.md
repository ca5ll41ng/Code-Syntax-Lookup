---
id: "python-en-function-pyexpat-xmlparser-parsefile"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.ParseFile"
signature: "xmlparser.ParseFile(file)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.ParseFile"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.ParseFile

Parse XML data reading from the object *file*.
*file* only needs to provide the `read(nbytes)` method,
which returns bytes, and an empty bytes object when there's no more data.
Text files are not supported;
use `Parse` for data which is already decoded.
