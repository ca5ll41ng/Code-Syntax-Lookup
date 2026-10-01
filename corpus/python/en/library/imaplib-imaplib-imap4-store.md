---
id: "python-en-function-imaplib-imap4-store"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.store"
signature: "IMAP4.store(message_set, command, flag_list, *, uid=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.store"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.store

Alters flag dispositions for messages in mailbox.  *command* is specified by
section 6.4.6 of RFC 3501 as being one of "FLAGS", "+FLAGS", or "-FLAGS",
optionally with a suffix of ".SILENT".

If *uid* is true, *message_set* is a set of UIDs and the `UID STORE`
command is used instead of `STORE`.

For example, to set the delete flag on all messages::

   typ, data = M.search(None, 'ALL')
   for num in data[0].split():
      M.store(num, '+FLAGS', r'\Deleted')
   M.expunge()

> **Note**
>
> Creating flags containing ']' (for example: "[test]") violates
> RFC 3501 (the IMAP protocol).  However, imaplib has historically
> allowed creation of such flags, and popular IMAP servers, such as Gmail,
> accept and produce such flags.  There are non-Python programs which also
> create such flags.  Although it is an RFC violation and IMAP clients and
> servers are supposed to be strict, imaplib still continues to allow
> such flags to be created for backward compatibility reasons, and as of
> Python 3.6, handles them if they are sent from the server, since this
> improves real-world compatibility.
>

> *Changed in next*: Added the *uid* parameter.
