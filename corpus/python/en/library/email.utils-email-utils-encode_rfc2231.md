---
id: "python-en-function-email-utils-encode_rfc2231"
language: "python"
lang: "en"
category: "function"
name: "encode_rfc2231"
signature: "encode_rfc2231(s, charset=None, language=None)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.encode_rfc2231"
license: "PSF"
updated: "2026-10-01"
---

# encode_rfc2231

Encode the string *s* according to RFC 2231.  Optional *charset* and
*language*, if given is the character set name and language name to use.  If
neither is given, *s* is returned as-is.  If *charset* is given but *language*
is not, the string is encoded using the empty string for *language*.
