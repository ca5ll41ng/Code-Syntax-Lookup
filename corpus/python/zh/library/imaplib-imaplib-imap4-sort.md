---
id: "python-zh-function-imaplib-imap4-sort"
language: "python"
lang: "zh"
category: "function"
name: "IMAP4.sort"
signature: "IMAP4.sort(sort_criteria, charset, search_criterion[, ...], *, uid=False, params=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/zh-cn/3/library/imaplib.html#imaplib.IMAP4.sort"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.sort

The `sort` command is a variant of `search` with sorting semantics for the
results.  Returned data contains a space separated list of matching message
numbers.

Sort has two arguments before the *search_criterion* argument(s); a
parenthesized list of *sort_criteria*, and the searching *charset*.  Note that
unlike `search`, the searching *charset* argument is mandatory.  There is also
a `uid sort` command which corresponds to `sort` the way that `uid search`
corresponds to `search`.  The `sort` command first searches the mailbox for
messages that match the given searching criteria using the charset argument for
the interpretation of strings in the searching criteria.  It then returns the
numbers of matching messages.

If *uid* is true, the message numbers in the response are UIDs (`UID SORT`).

As with `search`,
a *search_criterion* passed as `str` is encoded to *charset*;
pass `bytes` to send one already encoded.

If *params* is given, `?` placeholders in the search criteria are
substituted with the quoted parameters (see `the placeholders`).

这是一个 ``IMAP4rev1`` 扩展命令。

> *Changed in next*: Added the *params* and *uid* parameters. ``str`` search criteria are encoded to *charset*.
