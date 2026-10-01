---
id: "python-en-function-mailbox-mmdf"
language: "python"
lang: "en"
category: "function"
name: "MMDF"
signature: "MMDF(path, factory=None, create=True)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.MMDF"
license: "PSF"
updated: "2026-10-01"
---

# MMDF

A subclass of `Mailbox` for mailboxes in MMDF format. Parameter *factory*
is a callable object that accepts a file-like message representation (which
behaves as if opened in binary mode) and returns a custom representation. If
*factory* is `None`, `MMDFMessage` is used as the default message
representation. If *create* is `True`, the mailbox is created if it does not
exist.

MMDF is a single-file mailbox format invented for the Multichannel Memorandum
Distribution Facility, a mail transfer agent. Each message is in the same
form as an mbox message but is bracketed before and after by lines containing
four Control-A (`'\001'`) characters. As with the mbox format, the
beginning of each message is indicated by a line whose first five characters
are "From ", but additional occurrences of "From " are not transformed to
">From " when storing messages because the extra message separator lines
prevent mistaking such occurrences for the starts of subsequent messages.

Some `Mailbox` methods implemented by `MMDF` deserve special
remarks:

method:: get_bytes(key, from_=False)

method:: get_file(key, from_=False)

method:: lock()
