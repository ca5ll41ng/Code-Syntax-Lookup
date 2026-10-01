---
id: "python-en-function-codecs-charmap_build"
language: "python"
lang: "en"
category: "function"
name: "charmap_build"
signature: "charmap_build(string)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.charmap_build"
license: "PSF"
updated: "2026-10-01"
---

# charmap_build

Return a mapping suitable for encoding with a custom single-byte encoding.
Given a `str` *string* of up to 256 characters representing a
decoding table, returns either a compact internal mapping object
`EncodingMap` or a `dictionary` mapping character ordinals
to byte values. Raises a `TypeError` on invalid input.
