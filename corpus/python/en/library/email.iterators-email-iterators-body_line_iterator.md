---
id: "python-en-function-email-iterators-body_line_iterator"
language: "python"
lang: "en"
category: "function"
name: "body_line_iterator"
signature: "body_line_iterator(msg, decode=False)"
directive: "function"
module: "email.iterators"
source_url: "https://docs.python.org/3/library/email.iterators.html#email.iterators.body_line_iterator"
license: "PSF"
updated: "2026-10-01"
---

# body_line_iterator

This iterates over all the payloads in all the subparts of *msg*, returning the
string payloads line-by-line.  It skips over all the subpart headers, and it
skips over any subpart with a payload that isn't a Python string.  This is
somewhat equivalent to reading the flat text representation of the message from
a file using `~io.TextIOBase.readline`, skipping over all the
intervening headers.

Optional *decode* is passed through to `Message.get_payload`.
