---
id: "python-en-function-email-parser-feedparser"
language: "python"
lang: "en"
category: "function"
name: "FeedParser"
signature: "FeedParser(_factory=None, *, policy=policy.compat32)"
directive: "class"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#email.parser.FeedParser"
license: "PSF"
updated: "2026-10-01"
---

# FeedParser

Works like `BytesFeedParser` except that the input to the
`~BytesFeedParser.feed` method must be a string.  This is of limited
utility, since the only way for such a message to be valid is for it to
contain only ASCII text or, if `~email.policy.EmailPolicy.utf8` is
`True`, no binary attachments.

> *Changed in 3.3 Added the *policy* keyword.*
