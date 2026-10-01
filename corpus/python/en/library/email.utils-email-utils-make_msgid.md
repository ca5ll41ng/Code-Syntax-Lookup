---
id: "python-en-function-email-utils-make_msgid"
language: "python"
lang: "en"
category: "function"
name: "make_msgid"
signature: "make_msgid(idstring=None, domain=None)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.make_msgid"
license: "PSF"
updated: "2026-10-01"
---

# make_msgid

Returns a string suitable for an RFC 2822\ -compliant
`Message-ID` header.  Optional *idstring* if given, is a string
used to strengthen the uniqueness of the message id.  Optional *domain* if
given provides the portion of the msgid after the '@'.  The default is the
local hostname.  It is not normally necessary to override this default, but
may be useful certain cases, such as a constructing distributed system that
uses a consistent domain name across multiple hosts.

> *Changed in 3.2*: Added the *domain* keyword.
