---
id: "python-en-function-email-message-mimepart"
language: "python"
lang: "en"
category: "function"
name: "MIMEPart"
signature: "MIMEPart(policy=default)"
directive: "class"
module: "email.message"
source_url: "https://docs.python.org/3/library/email.message.html#email.message.MIMEPart"
license: "PSF"
updated: "2026-10-01"
---

# MIMEPart

This class represents a subpart of a MIME message.  It is identical to
`EmailMessage`, except that no `MIME-Version` headers are
added when `~EmailMessage.set_content` is called, since sub-parts do
not need their own `MIME-Version` headers.
