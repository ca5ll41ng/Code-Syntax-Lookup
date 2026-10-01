---
id: "python-en-function-doctest-ellipsis"
language: "python"
lang: "en"
category: "function"
name: "ELLIPSIS"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.ELLIPSIS"
license: "PSF"
updated: "2026-10-01"
---

# ELLIPSIS

When specified, an ellipsis marker (`...`) in the expected output can match
any substring in the actual output.  This includes substrings that span line
boundaries, and empty substrings, so it's best to keep usage of this simple.
Complicated uses can lead to the same kinds of "oops, it matched too much!"
surprises that `.*` is prone to in regular expressions.
