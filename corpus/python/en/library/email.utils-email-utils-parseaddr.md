---
id: "python-en-function-email-utils-parseaddr"
language: "python"
lang: "en"
category: "function"
name: "parseaddr"
signature: "parseaddr(address, *, strict=True)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.parseaddr"
license: "PSF"
updated: "2026-10-01"
---

# parseaddr

Parse address -- which should be the value of some address-containing field such
as `To` or `Cc` -- into its constituent *realname* and
*email address* parts.  Returns a tuple of that information, unless the parse
fails, in which case a 2-tuple of `('', '')` is returned.

If *strict* is true, use a strict parser which rejects malformed inputs.

> *Changed in 3.13*: Add *strict* optional parameter and reject malformed inputs by default.
