---
id: "python-en-function-email-utils-formataddr"
language: "python"
lang: "en"
category: "function"
name: "formataddr"
signature: "formataddr(pair, charset='utf-8', *, strict=True)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.formataddr"
license: "PSF"
updated: "2026-10-01"
---

# formataddr

The inverse of `parseaddr`, this takes a 2-tuple of the form `(realname,
email_address)` and returns the string value suitable for a `To` or
`Cc` header.  If the first element of *pair* is false, then the
second element is returned unmodified.

Optional *charset* is the character set that will be used in the RFC 2047
encoding of the `realname` if the `realname` contains non-ASCII
characters.  Can be an instance of `str` or a
`~email.charset.Charset`.  Defaults to `utf-8`.

If *strict* is true (the default), raise `ValueError` for inputs that
contain CR or LF, which are not allowed in an email address.  Set *strict*
to `False` to allow non-strict inputs.

> *Changed in 3.3*: Added the *charset* option.

> *Changed in next*: Added the *strict* parameter.
