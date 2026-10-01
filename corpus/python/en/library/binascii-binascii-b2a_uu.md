---
id: "python-en-function-binascii-b2a_uu"
language: "python"
lang: "en"
category: "function"
name: "b2a_uu"
signature: "b2a_uu(data, *, backtick=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.b2a_uu"
license: "PSF"
updated: "2026-10-01"
---

# b2a_uu

Convert binary data to a line of ASCII characters, the return value is the
converted line, including a newline char. The length of *data* should be at most
45. If *backtick* is true, zeros are represented by ``'`'`` instead of spaces.

> *Changed in 3.7*: Added the *backtick* parameter.
