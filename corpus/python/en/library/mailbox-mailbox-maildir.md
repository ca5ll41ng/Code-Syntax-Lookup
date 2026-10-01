---
id: "python-en-function-mailbox-maildir"
language: "python"
lang: "en"
category: "function"
name: "Maildir"
signature: "Maildir(dirname, factory=None, create=True)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.Maildir"
license: "PSF"
updated: "2026-10-01"
---

# Maildir

A subclass of `Mailbox` for mailboxes in Maildir format. Parameter
*factory* is a callable object that accepts a file-like message representation
(which behaves as if opened in binary mode) and returns a custom representation.
If *factory* is `None`, `MaildirMessage` is used as the default message
representation. If *create* is `True`, the mailbox is created if it does not
exist.

If *create* is `True` and the *dirname* path exists, it will be treated as
an existing maildir without attempting to verify its directory layout.

It is for historical reasons that *dirname* is named as such rather than *path*.

Maildir is a directory-based mailbox format invented for the qmail mail
transfer agent and now widely supported by other programs. Messages in a
Maildir mailbox are stored in separate files within a common directory
structure. This design allows Maildir mailboxes to be accessed and modified
by multiple unrelated programs without data corruption, so file locking is
unnecessary.

Maildir mailboxes contain three subdirectories, namely: `tmp`,
`new`, and `cur`. Messages are created momentarily in the
`tmp` subdirectory and then moved to the `new` subdirectory to
finalize delivery. A mail user agent may subsequently move the message to the
`cur` subdirectory and store information about the state of the message
in a special "info" section appended to its file name.

Folders of the style introduced by the Courier mail transfer agent are also
supported. Any subdirectory of the main mailbox is considered a folder if
`'.'` is the first character in its name. Folder names are represented by
`Maildir` without the leading `'.'`. Each folder is itself a Maildir
mailbox but should not contain other folders. Instead, a logical nesting is
indicated using `'.'` to delimit levels, e.g., "Archived.2005.07".

attribute:: Maildir.colon

> *Changed in 3.13*: :class:`Maildir` now ignores files with a leading dot.

`Maildir` instances have all of the methods of `Mailbox` in
addition to the following:

method:: list_folders()

method:: get_folder(folder)

method:: add_folder(folder)

method:: remove_folder(folder)

method:: clean()

method:: get_flags(key)

method:: set_flags(key, flags)

method:: add_flag(key, flag)

method:: remove_flag(key, flag)

method:: get_info(key)

method:: set_info(key, info)

Some `Mailbox` methods implemented by `Maildir` deserve special
remarks:

method:: add(message)

method:: flush()

method:: lock()

method:: close()

method:: get_file(key)
