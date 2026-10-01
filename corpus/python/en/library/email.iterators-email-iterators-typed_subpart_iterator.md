---
id: "python-en-function-email-iterators-typed_subpart_iterator"
language: "python"
lang: "en"
category: "function"
name: "typed_subpart_iterator"
signature: "typed_subpart_iterator(msg, maintype='text', subtype=None)"
directive: "function"
module: "email.iterators"
source_url: "https://docs.python.org/3/library/email.iterators.html#email.iterators.typed_subpart_iterator"
license: "PSF"
updated: "2026-10-01"
---

# typed_subpart_iterator

This iterates over all the subparts of *msg*, returning only those subparts that
match the MIME type specified by *maintype* and *subtype*.

Note that *subtype* is optional; if omitted, then subpart MIME type matching is
done only with the main type.  *maintype* is optional too; it defaults to
`text`.

Thus, by default `typed_subpart_iterator` returns each subpart that has a
MIME type of `text/\*`.
