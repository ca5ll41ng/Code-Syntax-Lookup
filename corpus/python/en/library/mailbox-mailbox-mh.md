---
id: "python-en-function-mailbox-mh"
language: "python"
lang: "en"
category: "function"
name: "MH"
signature: "MH(path, factory=None, create=True)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.MH"
license: "PSF"
updated: "2026-10-01"
---

# MH

A subclass of `Mailbox` for mailboxes in MH format. Parameter *factory*
is a callable object that accepts a file-like message representation (which
behaves as if opened in binary mode) and returns a custom representation. If
*factory* is `None`, `MHMessage` is used as the default message
representation. If *create* is `True`, the mailbox is created if it does not
exist.

MH is a directory-based mailbox format invented for the MH Message Handling
System, a mail user agent. Each message in an MH mailbox resides in its own
file. An MH mailbox may contain other MH mailboxes (called `folders`) in
addition to messages. Folders may be nested indefinitely. MH mailboxes also
support `sequences`, which are named lists used to logically group
messages without moving them to sub-folders. Sequences are defined in a file
called `.mh_sequences` in each folder.

The `MH` class manipulates MH mailboxes, but it does not attempt to
emulate all of `mh`'s behaviors. In particular, it does not modify
and is not affected by the `context` or `.mh_profile` files that
are used by `mh` to store its state and configuration.

`MH` instances have all of the methods of `Mailbox` in addition
to the following:

> *Changed in 3.13*: Supported folders that don't contain a :file:`.mh_sequences` file.

method:: list_folders()

method:: get_folder(folder)

method:: add_folder(folder)

method:: remove_folder(folder)

method:: get_sequences()

method:: set_sequences(sequences)

method:: pack()

Some `Mailbox` methods implemented by `MH` deserve special
remarks:

method:: remove(key)

method:: lock()

method:: get_file(key)

method:: flush()

method:: close()
