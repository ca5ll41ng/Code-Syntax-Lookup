---
id: "python-en-function-email-parser-bytesparser"
language: "python"
lang: "en"
category: "function"
name: "BytesParser"
signature: "BytesParser(_class=None, *, policy=policy.compat32)"
directive: "class"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.BytesParser"
license: "PSF"
updated: "2026-10-01"
---

# BytesParser

Create a `BytesParser` instance.  The *_class* and *policy*
arguments have the same meaning and semantics as the *_factory*
and *policy* arguments of `BytesFeedParser`.

Note: **The policy keyword should always be specified**; The default will
change to `email.policy.default` in a future version of Python.

> *Changed in 3.3*: Removed the *strict* argument that was deprecated in 2.4.  Added the *policy* keyword.

> *Changed in 3.6 *_class* defaults to the policy ``message_factory``.*

method:: parse(fp, headersonly=False)

method:: parsebytes(bytes, headersonly=False)

> *Added in 3.2*
