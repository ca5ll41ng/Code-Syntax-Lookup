---
id: "python-en-function-netrc-netrc"
language: "python"
lang: "en"
category: "function"
name: "netrc"
signature: "netrc([file])"
directive: "class"
module: "netrc"
source_url: "https://docs.python.org/3/library/netrc.html#netrc.netrc"
license: "PSF"
updated: "2026-10-01"
---

# netrc

A `~netrc.netrc` instance or subclass instance encapsulates data from  a netrc
file.  The initialization argument, if present, specifies the file to parse.  If
no argument is given, the file `.netrc` in the user's home directory --
as determined by `os.path.expanduser` -- will be read.  Otherwise,
a `FileNotFoundError` exception will be raised.
Parse errors will raise `NetrcParseError` with diagnostic
information including the file name, line number, and terminating token.

If no argument is specified on a POSIX system, the presence of passwords in
the `.netrc` file will raise a `NetrcParseError` if the file
ownership or permissions are insecure (owned by a user other than the user
running the process, or accessible for read or write by any other user).
This implements security behavior equivalent to that of ftp and other
programs that use `.netrc`. Such security checks are not available
on platforms that do not support `os.getuid`.

> *Changed in 3.4 Added the POSIX permission check.*

> *Changed in 3.7*: :func:`os.path.expanduser` is used to find the location of the :file:`.netrc` file when *file* is not passed as argument.

> *Changed in 3.10*: :class:`netrc` try UTF-8 encoding before using locale specific encoding. The entry in the netrc file no longer needs to contain all tokens.  The missing tokens' value default to an empty string.  All the tokens and their values now can contain arbitrary characters, like whitespace and non-ASCII characters. If the login name is anonymous, it won't trigger the security check.
