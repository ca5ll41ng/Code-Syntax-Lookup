---
id: "python-en-function-email-parser-parser"
language: "python"
lang: "en"
category: "function"
name: "Parser"
signature: "Parser(_class=None, *, policy=policy.compat32)"
directive: "class"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.Parser"
license: "PSF"
updated: "2026-10-01"
---

# Parser

This class is parallel to `BytesParser`, but handles string input.

> *Changed in 3.3*: Removed the *strict* argument.  Added the *policy* keyword.

> *Changed in 3.6 *_class* defaults to the policy ``message_factory``.*

method:: parse(fp, headersonly=False)

method:: parsestr(text, headersonly=False)
