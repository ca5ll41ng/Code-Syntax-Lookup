---
id: "python-en-function-email-headerregistry-group"
language: "python"
lang: "en"
category: "function"
name: "Group"
signature: "Group(display_name=None, addresses=None)"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.Group"
license: "PSF"
updated: "2026-10-01"
---

# Group

The class used to represent an address group.  The general form of an
address group is::

  display_name: [address-list];

As a convenience for processing lists of addresses that consist of a mixture
of groups and single addresses, a `Group` may also be used to represent
single addresses that are not part of a group by setting *display_name* to
`None` and providing a list of the single address as *addresses*.

attribute:: display_name

attribute:: addresses

method:: __str__()
