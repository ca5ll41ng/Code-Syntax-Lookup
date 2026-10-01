---
id: "python-en-function-email-parser-message_from_string"
language: "python"
lang: "en"
category: "function"
name: "message_from_string"
signature: "message_from_string(s, _class=None, *, policy=policy.compat32)"
directive: "function"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.message_from_string"
license: "PSF"
updated: "2026-10-01"
---

# message_from_string

Return a message object structure from a string.  This is equivalent to
`Parser().parsestr(s)`.  *_class* and *policy* are interpreted as
with the `~email.parser.Parser` class constructor.

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.
