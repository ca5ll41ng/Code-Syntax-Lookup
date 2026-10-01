---
id: "python-en-function-quopri-decode"
language: "python"
lang: "en"
category: "function"
name: "decode"
signature: "decode(input, output, header=False)"
directive: "function"
module: "quopri"
source_url: "https://docs.python.org/3/library/quopri.html#quopri.decode"
license: "PSF"
updated: "2026-10-01"
---

# decode

Decode the contents of the *input* file and write the resulting decoded binary
data to the *output* file. *input* and *output* must be `binary file objects`.  If the optional argument *header* is present and true, underscore
will be decoded as space. This is used to decode "Q"-encoded headers as
described in RFC 1522: "MIME (Multipurpose Internet Mail Extensions)
Part Two: Message Header Extensions for Non-ASCII Text".
