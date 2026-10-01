---
id: "python-en-function-email-headerregistry-address"
language: "python"
lang: "en"
category: "function"
name: "Address"
signature: "Address(display_name='', username='', domain='', addr_spec=None)"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.Address"
license: "PSF"
updated: "2026-10-01"
---

# Address

The class used to represent an email address.  The general form of an
address is::

   [display_name] <username@domain>

or::

   username@domain

where each part must conform to specific syntax rules spelled out in
RFC 5322.

As a convenience *addr_spec* can be specified instead of *username* and
*domain*, in which case *username* and *domain* will be parsed from the
*addr_spec*.  An *addr_spec* must be a properly RFC quoted string; if it is
not `Address` will raise an error.  Unicode characters are allowed and
will be property encoded when serialized.  However, per the RFCs, Unicode is
*not* allowed in the username portion of the address.

attribute:: display_name

attribute:: username

attribute:: domain

attribute:: addr_spec

method:: __str__()

To support SMTP (RFC 5321), `Address` handles one special case: if
`username` and `domain` are both the empty string (or `None`), then
the string value of the `Address` is `<>`.
