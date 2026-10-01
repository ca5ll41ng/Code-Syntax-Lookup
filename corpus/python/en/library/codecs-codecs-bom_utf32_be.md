---
id: "python-en-function-codecs-bom_utf32_be"
language: "python"
lang: "en"
category: "function"
name: "BOM_UTF32_BE"
directive: "data"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.BOM_UTF32_BE"
license: "PSF"
updated: "2026-10-01"
---

# BOM_UTF32_BE

These constants define various byte sequences,
being Unicode byte order marks (BOMs) for several encodings. They are
used in UTF-16 and UTF-32 data streams to indicate the byte order used,
and in UTF-8 as a Unicode signature. `BOM_UTF16` is either
`BOM_UTF16_BE` or `BOM_UTF16_LE` depending on the platform's
native byte order, `BOM` is an alias for `BOM_UTF16`,
`BOM_LE` for `BOM_UTF16_LE` and `BOM_BE` for
`BOM_UTF16_BE`. The others represent the BOM in UTF-8 and UTF-32
encodings.
