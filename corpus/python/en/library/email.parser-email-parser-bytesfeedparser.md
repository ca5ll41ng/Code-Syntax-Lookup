---
id: "python-en-function-email-parser-bytesfeedparser"
language: "python"
lang: "en"
category: "function"
name: "BytesFeedParser"
signature: "BytesFeedParser(_factory=None, *, policy=policy.compat32)"
directive: "class"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.BytesFeedParser"
license: "PSF"
updated: "2026-10-01"
---

# BytesFeedParser

Create a `BytesFeedParser` instance.  Optional *_factory* is a
no-argument callable; if not specified use the
`~email.policy.Policy.message_factory` from the *policy*.  Call
*_factory* whenever a new message object is needed.

If *policy* is specified use the rules it specifies to update the
representation of the message.  If *policy* is not set, use the
`compat32` policy, which maintains backward
compatibility with the Python 3.2 version of the email package and provides
`~email.message.Message` as the default factory.  All other policies
provide `~email.message.EmailMessage` as the default *_factory*. For
more information on what else *policy* controls, see the
`~email.policy` documentation.

Note: **The policy keyword should always be specified**; The default will
change to `email.policy.default` in a future version of Python.

> *Added in 3.2*

> *Changed in 3.3 Added the *policy* keyword.*

> *Changed in 3.6 *_factory* defaults to the policy ``message_factory``.*

method:: feed(data)

method:: close()
