---
id: "python-zh-function-base64-base64"
language: "python"
lang: "zh"
category: "function"
name: "base64"
title: "An example usage of the module:"
directive: "module"
module: "base64"
source_url: "https://docs.python.org/zh-cn/3/library/base64.html#module-base64"
license: "PSF"
updated: "2026-10-01"
---

# An example usage of the module:

此模块的一个使用示例：

   >>> import base64
   >>> encoded = base64.b64encode(b'data to be encoded')
   >>> encoded
   b'ZGF0YSB0byBiZSBlbmNvZGVk'
   >>> data = base64.b64decode(encoded)
   >>> data
   b'data to be encoded'

.. _base64-security:

**Security Considerations**

A new security considerations section was added to RFC 4648 (section 12); it's
recommended to review the security section for any code deployed to production.

> **Seealso**
>
> Module `binascii`
>    Support module containing ASCII-to-binary and binary-to-ASCII conversions.
>
> RFC 1521 - MIME (Multipurpose Internet Mail Extensions) Part One: Mechanisms for Specifying and Describing the Format of Internet Message Bodies
>    Section 5.2, "Base64 Content-Transfer-Encoding," provides the definition of the
>    base64 encoding.
>
> [ISO 32000-2 Portable document format - Part 2: PDF 2.0](https://pdfa.org/resource/iso-32000-2/)
>    Section 7.4.3, "ASCII85Decode Filter," provides the definition
>    of the Ascii85 encoding used in PDF and PostScript, including
>    the output character set and the details of data length preservation
>    using zero-padding and partial output groups.
>
> [ZeroMQ RFC 32/Z85](https://rfc.zeromq.org/spec/32/)
>    The "Formal Specification" section provides the character set used in Z85.
>
