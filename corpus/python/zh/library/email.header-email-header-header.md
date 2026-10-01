---
id: "python-zh-function-email-header-header"
language: "python"
lang: "zh"
category: "function"
name: "Header"
signature: "Header(s=None, charset=None, maxlinelen=None, header_name=None, continuation_ws=' ', errors='strict')"
directive: "class"
module: "email.header"
source_url: "https://docs.python.org/zh-cn/3/library/email.header.html#email.header.Header"
license: "PSF"
updated: "2026-10-01"
---

# Header

Create a MIME-compliant header that can contain strings in different character
sets.

Optional *s* is the initial header value.  If `None` (the default), the
initial header value is not set.  You can later append to the header with
`append` method calls.  *s* may be an instance of `bytes` or
`str`, but see the `append` documentation for semantics.

Optional *charset* serves two purposes: it has the same meaning as the *charset*
argument to the `append` method.  It also sets the default character set
for all subsequent `append` calls that omit the *charset* argument.  If
*charset* is not provided in the constructor (the default), the `us-ascii`
character set is used both as *s*'s initial charset and as the default for
subsequent `append` calls.

The maximum line length can be specified explicitly via *maxlinelen*.  For
splitting the first line to a shorter value (to account for the field header
which isn't included in *s*, e.g. `Subject`) pass in the name of the
field in *header_name*.  The default *maxlinelen* is 78, and the default value
for *header_name* is `None`, meaning it is not taken into account for the
first line of a long, split header.

Optional *continuation_ws* must be RFC 2822\ -compliant folding
whitespace, and is usually either a space or a hard tab character.  This
character will be prepended to continuation lines.  *continuation_ws*
defaults to a single space character.

可选的 *errors* 会被直接传递给 :meth:`append` 方法。

method:: append(s, charset=None, errors='strict')

method:: encode(splitchars=';, \t', maxlinelen=None, linesep='\n')

The `Header` class also provides a number of methods to support
standard operators and built-in functions.

method:: __str__()

method:: __eq__(other)

method:: __ne__(other)
