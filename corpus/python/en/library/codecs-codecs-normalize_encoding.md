---
id: "python-en-function-codecs-normalize_encoding"
language: "python"
lang: "en"
category: "function"
name: "normalize_encoding"
signature: "normalize_encoding(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.normalize_encoding"
license: "PSF"
updated: "2026-10-01"
---

# normalize_encoding

Normalize encoding name *encoding*.

Normalization works as follows: all non-alphanumeric characters except the
dot used for Python package names are collapsed and replaced with a single
underscore, leading and trailing underscores are removed.
For example, `'  -;#'` becomes `'_'`.

Note that *encoding* should be ASCII only.
