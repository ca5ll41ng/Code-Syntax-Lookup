---
id: "python-en-function-email-headerregistry-baseheader"
language: "python"
lang: "en"
category: "function"
name: "BaseHeader"
signature: "BaseHeader(name, value)"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.BaseHeader"
license: "PSF"
updated: "2026-10-01"
---

# BaseHeader

*name* and *value* are passed to `BaseHeader` from the
`~email.policy.EmailPolicy.header_factory` call.  The string value of
any header object is the *value* fully decoded to a string.

This base class defines the following read-only properties:

attribute:: name

attribute:: defects

attribute:: max_count

`BaseHeader` also provides the following method, which is called by the
email library code and should not in general be called by application
programs:

method:: fold(*, policy)

`BaseHeader` by itself cannot be used to create a header object.  It
defines a protocol that each specialized header cooperates with in order to
produce the header object.  Specifically, `BaseHeader` requires that
the specialized class provide a `classmethod` named `parse`.  This
method is called as follows::

    parse(string, kwds)

`kwds` is a dictionary containing one pre-initialized key, `defects`.
`defects` is an empty list.  The parse method should append any detected
defects to this list.  On return, the `kwds` dictionary *must* contain
values for at least the keys `decoded`, `defects` and `parse_tree`.
`decoded` should be the string value for the header (that is, the header
value fully decoded to a string). `parse_tree` is set to the parse tree obtained
from parsing the header. The parse method should assume that *string* may
contain content-transfer-encoded parts, but should correctly handle all valid
Unicode characters as well so that it can parse un-encoded header values.

`BaseHeader`'s `__new__` then creates the header instance, and calls its
`init` method.  The specialized class only needs to provide an `init`
method if it wishes to set additional attributes beyond those provided by
`BaseHeader` itself.  Such an `init` method should look like this::

    def init(self, /, *args, **kw):
        self._myattr = kw.pop('myattr')
        super().init(*args, **kw)

That is, anything extra that the specialized class puts in to the `kwds`
dictionary should be removed and handled, and the remaining contents of
`kw` (and `args`) passed to the `BaseHeader` `init` method.
