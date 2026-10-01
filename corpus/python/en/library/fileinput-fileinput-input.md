---
id: "python-en-function-fileinput-input"
language: "python"
lang: "en"
category: "function"
name: "input"
signature: "input(files=None, inplace=False, backup='', *, mode='r', openhook=None, encoding=None, errors=None)"
directive: "function"
module: "fileinput"
source_url: "https://docs.python.org/3/library/fileinput.html#fileinput.input"
license: "PSF"
updated: "2026-10-01"
---

# input

Create an instance of the `FileInput` class.  The instance will be used
as global state for the functions of this module, and is also returned to use
during iteration.  The parameters to this function will be passed along to the
constructor of the `FileInput` class.

The `FileInput` instance can be used as a context manager in the
`with` statement.  In this example, *input* is closed after the
`with` statement is exited, even if an exception occurs::

   with fileinput.input(files=('spam.txt', 'eggs.txt'), encoding="utf-8") as f:
       for line in f:
           process(line)

> *Changed in 3.2*: Can be used as a context manager.

> *Changed in 3.8*: The keyword parameters *mode* and *openhook* are now keyword-only.

> *Changed in 3.10*: The keyword-only parameter *encoding* and *errors* are added.
