---
id: "python-en-function-imaplib-imap4-thread"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.thread"
signature: "IMAP4.thread(threading_algorithm, charset, search_criterion[, ...], *, uid=False, params=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.thread"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.thread

The `thread` command is a variant of `search` with threading semantics for
the results.  Returned data contains a space separated list of thread members.

Thread members consist of zero or more messages numbers, delimited by spaces,
indicating successive parent and child.

Thread has two arguments before the *search_criterion* argument(s); a
*threading_algorithm*, and the searching *charset*.  Note that unlike
`search`, the searching *charset* argument is mandatory.  There is also a
`uid thread` command which corresponds to `thread` the way that `uid
search` corresponds to `search`.  The `thread` command first searches the
mailbox for messages that match the given searching criteria using the *charset*
argument for the interpretation of strings in the searching criteria. It then
returns the matching messages threaded according to the specified threading
algorithm.

If *uid* is true, the message numbers in the response are UIDs
(`UID THREAD`).

As with `search`,
a *search_criterion* passed as `str` is encoded to *charset*;
pass `bytes` to send one already encoded.

If *params* is given, `?` placeholders in the search criteria are
substituted with the quoted parameters (see `the placeholders`).

This is an `IMAP4rev1` extension command.

> *Changed in next*: Added the *params* and *uid* parameters. ``str`` search criteria are encoded to *charset*.
