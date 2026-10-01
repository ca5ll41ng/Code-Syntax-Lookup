---
id: "python-en-function-types-mappingproxytype"
language: "python"
lang: "en"
category: "function"
name: "MappingProxyType"
signature: "MappingProxyType(mapping)"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.MappingProxyType"
license: "PSF"
updated: "2026-10-01"
---

# MappingProxyType

Read-only proxy of a mapping. It provides a dynamic view on the mapping's
entries, which means that when the mapping changes, the view reflects these
changes.

`MappingProxyType`\s are `generic` over two types,
signifying (respectively) the types of the underlying mapping's keys and
values.

> *Added in 3.3*

> *Changed in 3.9*: Updated to support the new union (``|``) operator from :pep:`584`, which simply delegates to the underlying mapping.

describe:: key in proxy

describe:: proxy[key]

describe:: iter(proxy)

describe:: len(proxy)

method:: copy()

method:: get(key[, default])

method:: items()

method:: keys()

method:: values()

describe:: reversed(proxy)

describe:: hash(proxy)
