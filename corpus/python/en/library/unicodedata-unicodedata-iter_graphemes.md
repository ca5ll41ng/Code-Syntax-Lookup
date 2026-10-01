---
id: "python-en-function-unicodedata-iter_graphemes"
language: "python"
lang: "en"
category: "function"
name: "iter_graphemes"
signature: "iter_graphemes(unistr, start=0, end=sys.maxsize, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.iter_graphemes"
license: "PSF"
updated: "2026-10-01"
---

# iter_graphemes

Returns an iterator to iterate over grapheme clusters.
With optional *start*, iteration begins at that position.
With optional *end*, iteration stops at that position.

Converting an emitted item to string returns a substring corresponding to
the grapheme cluster.
Its `start` and `end` attributes denote the start and end of
the grapheme cluster.

It uses extended grapheme cluster rules defined by Unicode
Standard Annex #29, `"Unicode Text Segmentation"
<https://www.unicode.org/reports/tr29/>`_.

> *Added in 3.15*
