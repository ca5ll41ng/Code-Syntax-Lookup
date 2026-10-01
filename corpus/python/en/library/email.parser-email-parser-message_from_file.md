---
id: "python-en-function-email-parser-message_from_file"
language: "python"
lang: "en"
category: "function"
name: "message_from_file"
signature: "message_from_file(fp, _class=None, *, policy=policy.compat32)"
directive: "function"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.message_from_file"
license: "PSF"
updated: "2026-10-01"
---

# message_from_file

Return a message object structure tree from an open `file object`.
This is equivalent to `Parser().parse(fp)`.  *_class* and *policy* are
interpreted as with the `~email.parser.Parser` class constructor.

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.

> *Changed in 3.6 *_class* defaults to the policy ``message_factory``.*
