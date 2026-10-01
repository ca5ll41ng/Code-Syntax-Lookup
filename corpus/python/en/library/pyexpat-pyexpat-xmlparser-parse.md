---
id: "python-en-function-pyexpat-xmlparser-parse"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.Parse"
signature: "xmlparser.Parse(data[, isfinal])"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.Parse"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.Parse

Parses the contents of *data*,
calling the appropriate handler functions to process the parsed data.
*data* can be a `bytes-like object` or a string.
If it is a string, the encoding declaration in the XML data is ignored,
and the data is parsed as already decoded text.
*isfinal* must be true on the final call to this method;
it allows the parsing of a single file in fragments,
not the submission of multiple files.
*data* can be empty at any time.
