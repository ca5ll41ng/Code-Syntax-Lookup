---
id: "python-en-function-email-utils-collapse_rfc2231_value"
language: "python"
lang: "en"
category: "function"
name: "collapse_rfc2231_value"
signature: "collapse_rfc2231_value(value, errors='replace', fallback_charset='us-ascii')"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.collapse_rfc2231_value"
license: "PSF"
updated: "2026-10-01"
---

# collapse_rfc2231_value

When a header parameter is encoded in RFC 2231 format,
`Message.get_param` may return a
3-tuple containing the character set,
language, and value.  `collapse_rfc2231_value` turns this into a
string.  Optional *errors* is passed to the *errors* argument of `str`'s
`~str.encode` method; it defaults to `'replace'`.  Optional
*fallback_charset* specifies the character set to use if the one in the
RFC 2231 header is not known by Python; it defaults to `'us-ascii'`.

For convenience, if the *value* passed to `collapse_rfc2231_value` is not
a tuple, it should be a string and it is returned unquoted.
