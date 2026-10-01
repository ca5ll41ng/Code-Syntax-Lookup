---
id: "python-en-function-pyexpat-expaterror-code"
language: "python"
lang: "en"
category: "function"
name: "ExpatError.code"
directive: "attribute"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.ExpatError.code"
license: "PSF"
updated: "2026-10-01"
---

# ExpatError.code

Expat's internal error number for the specific error.  The
`errors.messages` dictionary maps
these error numbers to Expat's error messages.  For example::

   from xml.parsers.expat import ParserCreate, ExpatError, errors

   p = ParserCreate()
   try:
       p.Parse(some_xml_document)
   except ExpatError as err:
       print("Error:", errors.messages[err.code])

The `~xml.parsers.expat.errors` module also provides error message
constants and a dictionary `~xml.parsers.expat.errors.codes` mapping
these messages back to the error codes, see below.
