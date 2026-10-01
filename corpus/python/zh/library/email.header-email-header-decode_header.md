---
id: "python-zh-function-email-header-decode_header"
language: "python"
lang: "zh"
category: "function"
name: "decode_header"
signature: "decode_header(header)"
directive: "function"
module: "email.header"
source_url: "https://docs.python.org/zh-cn/3/library/email.header.html#email.header.decode_header"
license: "PSF"
updated: "2026-10-01"
---

# decode_header

Decode a message header value without converting the character set. The header
value is in *header*.

出于历史原因，此函数可能返回：

1. A list of pairs containing each of the decoded parts of the header,
   `(decoded_bytes, charset)`, where *decoded_bytes* is always an instance of
   `bytes`, and *charset* is either:

     - A lower case string containing the name of the character set specified.

     - `None` for non-encoded parts of the header.

2. A list of length 1 containing a pair `(string, None)`, where
   *string* is always an instance of `str`.

An `email.errors.HeaderParseError` may be raised when certain decoding
errors occur (e.g. a base64 decoding exception).

这里有一些示例：

   >>> from email.header import decode_header
   >>> decode_header('=?iso-8859-1?q?p=F6stal?=')
   [(b'p\xf6stal', 'iso-8859-1')]
   >>> decode_header('unencoded_string')
   [('unencoded_string', None)]
   >>> decode_header('bar =?utf-8?B?ZsOzbw==?=')
   [(b'bar ', None), (b'f\xc3\xb3o', 'utf-8')]

> **Note**
>
> This function exists for backwards compatibility only. For
> new code, we recommend using `email.headerregistry.HeaderRegistry`.
>
