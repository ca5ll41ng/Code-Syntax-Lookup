---
id: "python-en-function-email-parser-message_from_bytes"
language: "python"
lang: "en"
category: "function"
name: "message_from_bytes"
signature: "message_from_bytes(s, _class=None, *, policy=policy.compat32)"
directive: "function"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.message_from_bytes"
license: "PSF"
updated: "2026-10-01"
---

# message_from_bytes

Return a message object structure from a `bytes-like object`.  This is
equivalent to `BytesParser().parsebytes(s)`.  Optional *_class* and
*policy* are interpreted as with the `~email.parser.BytesParser` class
constructor.

> *Added in 3.2*

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.
