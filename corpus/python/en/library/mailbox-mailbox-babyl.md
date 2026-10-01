---
id: "python-en-function-mailbox-babyl"
language: "python"
lang: "en"
category: "function"
name: "Babyl"
signature: "Babyl(path, factory=None, create=True)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.Babyl"
license: "PSF"
updated: "2026-10-01"
---

# Babyl

A subclass of `Mailbox` for mailboxes in Babyl format. Parameter
*factory* is a callable object that accepts a file-like message representation
(which behaves as if opened in binary mode) and returns a custom representation.
If *factory* is `None`, `BabylMessage` is used as the default message
representation. If *create* is `True`, the mailbox is created if it does not
exist.

Babyl is a single-file mailbox format used by the Rmail mail user agent
included with Emacs. The beginning of a message is indicated by a line
containing the two characters Control-Underscore (`'\037'`) and Control-L
(`'\014'`). The end of a message is indicated by the start of the next
message or, in the case of the last message, a line containing a
Control-Underscore (`'\037'`) character.

Messages in a Babyl mailbox have two sets of headers, original headers and
so-called visible headers. Visible headers are typically a subset of the
original headers that have been reformatted or abridged to be more
attractive. Each message in a Babyl mailbox also has an accompanying list of
`labels`, or short strings that record extra information about the
message, and a list of all user-defined labels found in the mailbox is kept
in the Babyl options section.

`Babyl` instances have all of the methods of `Mailbox` in
addition to the following:

method:: get_labels()

Some `Mailbox` methods implemented by `Babyl` deserve special
remarks:

method:: get_file(key)

method:: lock()
