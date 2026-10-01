---
id: "python-en-function-codecs-iterencode"
language: "python"
lang: "en"
category: "function"
name: "iterencode"
signature: "iterencode(iterator, encoding, errors='strict', **kwargs)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.iterencode"
license: "PSF"
updated: "2026-10-01"
---

# iterencode

Uses an incremental encoder to iteratively encode the input provided by
*iterator*. *iterator* must yield `str` objects.
This function is a `generator`. The *errors* argument (as well as any
other keyword argument) is passed through to the incremental encoder.

This function requires that the codec accept text `str` objects
to encode. Therefore it does not support bytes-to-bytes encoders such as
`base64_codec`.
