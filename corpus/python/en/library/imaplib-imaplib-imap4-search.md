---
id: "python-en-function-imaplib-imap4-search"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.search"
signature: "IMAP4.search(charset, criterion[, ...], *, uid=False, params=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.search"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.search

Search mailbox for matching messages.  *charset* may be `None`, in which case
no `CHARSET` will be specified in the request to the server.  The IMAP
protocol requires that at least one criterion be specified; an exception will be
raised when the server returns an error.  *charset* must be `None` if
the `UTF8=ACCEPT` capability was enabled using the `enable`
command.

If *uid* is true, the message numbers in the response are UIDs
(`UID SEARCH`).

A criterion passed as `str` is encoded to *charset*
(which must name a codec known to Python);
pass `bytes` to send a criterion that is already encoded,
for example when *charset* is one that Python does not support.
When *charset* is `None` (as it must be under `UTF8=ACCEPT`),
the criterion is sent using the connection's encoding instead.

If *params* is given, `?` placeholders in the criteria are substituted
with the quoted parameters (see `the placeholders`).

Example::

   # M is a connected IMAP4 instance...
   typ, msgnums = M.search(None, 'FROM', '"John Smith"')

   # or:
   typ, msgnums = M.search(None, '(FROM "John Smith")')

   # or, letting the module quote the value (this is recommended):
   typ, msgnums = M.search(None, 'FROM ?', params=['John Smith'])

> *Changed in next*: Added the *params* and *uid* parameters. ``str`` search criteria are encoded to *charset*.
