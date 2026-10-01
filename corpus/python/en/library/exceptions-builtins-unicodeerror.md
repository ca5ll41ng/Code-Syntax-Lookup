---
id: "python-en-function-builtins-unicodeerror"
language: "python"
lang: "en"
category: "function"
name: "UnicodeError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#UnicodeError"
license: "PSF"
updated: "2026-10-01"
---

# UnicodeError

Raised when a Unicode-related encoding or decoding error occurs.  It is a
subclass of `ValueError`.

`UnicodeError` has attributes that describe the encoding or decoding
error.  For example, `err.object[err.start:err.end]` gives the particular
invalid input that the codec failed on.

attribute:: encoding

attribute:: reason

attribute:: object

attribute:: start

attribute:: end
