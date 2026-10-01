---
id: "python-en-function-collections-userlist"
language: "python"
lang: "en"
category: "function"
name: "UserList"
signature: "UserList([list])"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.UserList"
license: "PSF"
updated: "2026-10-01"
---

# UserList

Class that simulates a list.  The instance's contents are kept in a regular
list, which is accessible via the `data` attribute of `UserList`
instances.  The instance's contents are initially set to a copy of *list*,
defaulting to the empty list `[]`.  *list* can be any iterable, for
example a real Python list or a `UserList` object.

In addition to supporting the methods and operations of mutable sequences,
`UserList` instances provide the following attribute:

attribute:: data
