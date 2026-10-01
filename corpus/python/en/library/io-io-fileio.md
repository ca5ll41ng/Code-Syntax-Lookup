---
id: "python-en-function-io-fileio"
language: "python"
lang: "en"
category: "function"
name: "FileIO"
signature: "FileIO(name, mode='r', closefd=True, opener=None)"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.FileIO"
license: "PSF"
updated: "2026-10-01"
---

# FileIO

A raw binary stream representing an OS-level file containing bytes data.  It
inherits from `RawIOBase` and implements its low-level access design.
This means `~RawIOBase.write` does not guarantee all bytes are written
and `~RawIOBase.read` may read less bytes than requested even when more
bytes may be present in the underlying file. To get "write all" and
"read at least" behavior, use `binary-io`.

The *name* can be one of two things:

* a character string or `bytes` object representing the path to the
  file which will be opened. In this case closefd must be `True` (the default)
  otherwise an error will be raised.
* an integer representing the number of an existing OS-level file descriptor
  to which the resulting `FileIO` object will give access. When the
  FileIO object is closed this fd will be closed as well, unless *closefd*
  is set to `False`.

The *mode* can be `'r'`, `'w'`, `'x'` or `'a'` for reading
(default), writing, exclusive creation or appending. The file will be
created if it doesn't exist when opened for writing or appending; it will be
truncated when opened for writing. `FileExistsError` will be raised if
it already exists when opened for creating. Opening a file for creating
implies writing, so this mode behaves in a similar way to `'w'`. Add a
`'+'` to the mode to allow simultaneous reading and writing.

A custom opener can be used by passing a callable as *opener*. The underlying
file descriptor for the file object is then obtained by calling *opener* with
(*name*, *flags*). *opener* must return an open file descriptor (passing
`os.open` as *opener* results in functionality similar to passing
`None`).

The newly created file is `non-inheritable`.

See the `open` built-in function for examples on using the *opener*
parameter.

> **Warning**
>
> `FileIO` is a low-level I/O object and members, such as
> `~RawIOBase.read` and `~RawIOBase.write`, need to have their
> return values checked explicitly in a retry loop to implement "write all"
> and "read at least" behavior. High-level I/O objects `binary-io` and
> `text-io` implement retry behavior.
>

> *Changed in 3.3*: The *opener* parameter was added. The ``'x'`` mode was added.

> *Changed in 3.4*: The file is now non-inheritable.

`FileIO` provides these data attributes in addition to those from
`RawIOBase` and `IOBase`:

attribute:: mode

attribute:: name
