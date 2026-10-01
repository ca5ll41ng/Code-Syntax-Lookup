---
id: "python-en-function-email-parser-message_from_binary_file-fp-_class-none"
language: "python"
lang: "en"
category: "function"
name: "message_from_binary_file(fp, _class=None, *, \\"
directive: "function"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.message_from_binary_file(fp, _class=None, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# message_from_binary_file(fp, _class=None, *, \

Return a message object structure tree from an open binary `file
object`.  This is equivalent to `BytesParser().parse(fp)`.  *_class* and
*policy* are interpreted as with the `~email.parser.BytesParser` class
constructor.

> *Added in 3.2*

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.
