---
id: "python-en-function-email-headerregistry-addressheader"
language: "python"
lang: "en"
category: "function"
name: "AddressHeader"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.AddressHeader"
license: "PSF"
updated: "2026-10-01"
---

# AddressHeader

Address headers are one of the most complex structured header types.
The `AddressHeader` class provides a generic interface to any address
header.

This header type provides the following additional attributes:

attribute:: groups

attribute:: addresses

The `decoded` value of the header will have all encoded words decoded to
a string.  `~encodings.idna` encoded domain names are also decoded to
a string.  The `decoded` value is set by `joining` the
`str` value of the elements of the `groups` attribute with `',
'`.

A list of `.Address` and `.Group` objects in any combination
may be used to set the value of an address header.  `Group` objects whose
`display_name` is `None` will be interpreted as single addresses, which
allows an address list to be copied with groups intact by using the list
obtained from the `groups` attribute of the source header.
