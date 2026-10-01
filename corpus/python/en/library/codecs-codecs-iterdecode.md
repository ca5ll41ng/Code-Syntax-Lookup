---
id: "python-en-function-codecs-iterdecode"
language: "python"
lang: "en"
category: "function"
name: "iterdecode"
signature: "iterdecode(iterator, encoding, errors='strict', **kwargs)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.iterdecode"
license: "PSF"
updated: "2026-10-01"
---

# iterdecode

Uses an incremental decoder to iteratively decode the input provided by
*iterator*. *iterator* must yield `bytes` objects.
This function is a `generator`. The *errors* argument (as well as any
other keyword argument) is passed through to the incremental decoder.

This function requires that the codec accept `bytes` objects
to decode. Therefore it does not support text-to-text encoders such as
`rot_13`, although `rot_13` may be used equivalently with
`iterencode`.
