---
id: "python-en-function-imaplib-imaplib"
language: "python"
lang: "en"
category: "function"
name: "imaplib"
title: "Internal `~io.BufferedReader` associated with the underlying socket."
directive: "module"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#module-imaplib"
license: "PSF"
updated: "2026-10-01"
---

# Internal `~io.BufferedReader` associated with the underlying socket.

property:: IMAP4.file

.. _imap4-example:

**IMAP4 Example**

Here is a minimal example (without error checking) that opens a mailbox and
retrieves and prints all messages::

   import getpass, imaplib

   M = imaplib.IMAP4(host='example.org')
   M.login(getpass.getuser(), getpass.getpass())
   M.select()
   typ, data = M.search(None, 'ALL')
   for num in data[0].split():
       typ, data = M.fetch(num, '(RFC822)')
       print('Message %s\n%s\n' % (num, data[0][1]))
   M.close()
   M.logout()

> **Note**
>
> A `FETCH` response may contain additional or unsolicited data
> (see RFC 3501, section 7.4.2),
> so production code should inspect the whole response
> rather than rely on `data[0][1]`.
>
