---
id: "python-en-function-base64-encode"
language: "python"
lang: "en"
category: "function"
name: "encode"
signature: "encode(input, output)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.encode"
license: "PSF"
updated: "2026-10-01"
---

# encode

Encode the contents of the binary *input* file and write the resulting base64
encoded data to the *output* file. *input* and *output* must be `file
objects`. *input* will be read until `input.read()` returns
an empty bytes object. `encode` inserts a newline character (`b'\n'`)
after every 76 bytes of the output, as well as ensuring that the output
always ends with a newline, as per RFC 2045 (MIME).
