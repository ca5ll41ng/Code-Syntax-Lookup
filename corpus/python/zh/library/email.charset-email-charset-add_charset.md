---
id: "python-zh-function-email-charset-add_charset"
language: "python"
lang: "zh"
category: "function"
name: "add_charset"
signature: "add_charset(charset, header_enc=None, body_enc=None, output_charset=None)"
directive: "function"
module: "email.charset"
source_url: "https://docs.python.org/zh-cn/3/library/email.charset.html#email.charset.add_charset"
license: "PSF"
updated: "2026-10-01"
---

# add_charset

向全局注册表添加字符特征属性。

*charset* is the input character set, and must be the canonical name of a
character set.

Optional *header_enc* and *body_enc* is either `charset.QP` for
quoted-printable, `charset.BASE64` for base64 encoding,
`charset.SHORTEST` for the shortest of quoted-printable or base64 encoding,
or `None` for no encoding.  `SHORTEST` is only valid for
*header_enc*. The default is `None` for no encoding.

Optional *output_charset* is the character set that the output should be in.
Conversions will proceed from input charset, to Unicode, to the output charset
when the method `Charset.convert` is called.  The default is to output in
the same character set as the input.

Both *input_charset* and *output_charset* must have Unicode codec entries in the
module's character set-to-codec mapping; use `add_codec` to add codecs the
module does not know about.  See the `codecs` module's documentation for
more information.

The global character set registry is kept in the module global dictionary
`CHARSETS`.
