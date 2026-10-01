---
id: "python-zh-function-codecs-codecs"
language: "python"
lang: "zh"
category: "function"
name: "codecs"
title: "`encodings.mbcs` --- Windows ANSI codepage"
directive: "module"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#module-codecs"
license: "PSF"
updated: "2026-10-01"
---

# `encodings.mbcs` --- Windows ANSI codepage

**`encodings.mbcs` --- Windows ANSI codepage**

此模块实现ANSI代码页（CP_ACP）。

availability:: Windows.

> *Changed in 3.2*: Before 3.2, the *errors* argument was ignored; ``'replace'`` was always used to encode, and ``'ignore'`` to decode.

> *Changed in 3.3*: Support any error handler.

**`encodings.utf_8_sig` --- UTF-8 codec with BOM signature**

This module implements a variant of the UTF-8 codec. On encoding, a UTF-8 encoded
BOM will be prepended to the UTF-8 encoded bytes. For the stateful encoder this
is only done once (on the first write to the byte stream). On decoding, an
optional UTF-8 encoded BOM at the start of the data will be skipped.
