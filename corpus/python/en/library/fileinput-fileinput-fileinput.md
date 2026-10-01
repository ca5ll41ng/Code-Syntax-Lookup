---
id: "python-en-function-fileinput-fileinput"
language: "python"
lang: "en"
category: "function"
name: "FileInput"
signature: "FileInput(files=None, inplace=False, backup='', *, mode='r', openhook=None, encoding=None, errors=None)"
directive: "class"
module: "fileinput"
source_url: "https://docs.python.org/3/library/fileinput.html#fileinput.FileInput"
license: "PSF"
updated: "2026-10-01"
---

# FileInput

Class `FileInput` is the implementation; its methods `filename`,
`fileno`, `lineno`, `filelineno`, `isfirstline`,
`isstdin`, `nextfile` and `close` correspond to the
functions of the same name in the module. In addition it is `iterable`
and has a `~io.TextIOBase.readline` method which returns the next
input line. The sequence must be accessed in strictly sequential order;
random access and `~io.TextIOBase.readline` cannot be mixed.

With *mode* you can specify which file mode will be passed to `open`. It
must be one of `'r'` and `'rb'`.

The *openhook*, when given, must be a function that takes two arguments,
*filename* and *mode*, and returns an accordingly opened file-like object. You
cannot use *inplace* and *openhook* together.

You can specify *encoding* and *errors* that is passed to `open` or *openhook*.

A `FileInput` instance can be used as a context manager in the
`with` statement.  In this example, *input* is closed after the
`with` statement is exited, even if an exception occurs::

   with FileInput(files=('spam.txt', 'eggs.txt')) as input:
       process(input)

> *Changed in 3.2*: Can be used as a context manager.

> *Changed in 3.8*: The keyword parameter *mode* and *openhook* are now keyword-only.

> *Changed in 3.10*: The keyword-only parameter *encoding* and *errors* are added.

> *Changed in 3.11*: The ``'rU'`` and ``'U'`` modes and the :meth:`!__getitem__` method have been removed.
