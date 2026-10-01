---
id: "python-en-function-email-header-make_header"
language: "python"
lang: "en"
category: "function"
name: "make_header"
signature: "make_header(decoded_seq, maxlinelen=None, header_name=None, continuation_ws=' ')"
directive: "function"
module: "email.header"
source_url: "https://docs.python.org/3/library/email.header.html#email.header.make_header"
license: "PSF"
updated: "2026-10-01"
---

# make_header

Create a `Header` instance from a sequence of pairs as returned by
`decode_header`.

`decode_header` takes a header value string and returns a sequence of
pairs of the format `(decoded_string, charset)` where *charset* is the name of
the character set.

This function takes one of those sequence of pairs and returns a
`Header` instance.  Optional *maxlinelen*, *header_name*, and
*continuation_ws* are as in the `Header` constructor.

> **Note**
>
> This function exists for backwards compatibility only, and is
> not recommended for use in new code.
>
