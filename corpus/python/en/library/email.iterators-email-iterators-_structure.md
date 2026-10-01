---
id: "python-en-function-email-iterators-_structure"
language: "python"
lang: "en"
category: "function"
name: "_structure"
signature: "_structure(msg, fp=None, level=0, include_default=False)"
directive: "function"
module: "email.iterators"
source_url: "https://docs.python.org/3/library/email.iterators.html#email.iterators._structure"
license: "PSF"
updated: "2026-10-01"
---

# _structure

Prints an indented representation of the content types of the message object
structure.  For example:

testsetup::

```python

>>> msg = email.message_from_file(somefile)
>>> _structure(msg)
multipart/mixed
    text/plain
    text/plain
    multipart/digest
        message/rfc822
            text/plain
        message/rfc822
            text/plain
        message/rfc822
            text/plain
        message/rfc822
            text/plain
        message/rfc822
            text/plain
    text/plain
```

testcleanup::

Optional *fp* is a file-like object to print the output to.  It must be
suitable for Python's `print` function.  *level* is used internally.
*include_default*, if true, prints the default type as well.
