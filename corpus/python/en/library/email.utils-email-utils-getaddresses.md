---
id: "python-en-function-email-utils-getaddresses"
language: "python"
lang: "en"
category: "function"
name: "getaddresses"
signature: "getaddresses(fieldvalues, *, strict=True)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.getaddresses"
license: "PSF"
updated: "2026-10-01"
---

# getaddresses

This method returns a list of 2-tuples of the form returned by `parseaddr()`.
*fieldvalues* is a sequence of header field values as might be returned by
`Message.get_all`.

If *strict* is true, use a strict parser which rejects malformed inputs.

Here's a simple example that gets all the recipients of a message::

   from email.utils import getaddresses

   tos = msg.get_all('to', [])
   ccs = msg.get_all('cc', [])
   resent_tos = msg.get_all('resent-to', [])
   resent_ccs = msg.get_all('resent-cc', [])
   all_recipients = getaddresses(tos + ccs + resent_tos + resent_ccs)

> *Changed in 3.13*: Add *strict* optional parameter and reject malformed inputs by default.
