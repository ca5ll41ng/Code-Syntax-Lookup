---
id: "python-en-function-types-genericalias"
language: "python"
lang: "en"
category: "function"
name: "GenericAlias"
signature: "GenericAlias(t_origin, t_args)"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.GenericAlias"
license: "PSF"
updated: "2026-10-01"
---

# GenericAlias

The type of `parameterized generics` such as
`list[int]`.

`t_origin` should be a non-parameterized generic class, such as `list`,
`tuple` or `dict`.  `t_args` should be a `tuple` (possibly of
length 1) of types which parameterize `t_origin`::

   >>> from types import GenericAlias

   >>> list[int] == GenericAlias(list, (int,))
   True
   >>> dict[str, int] == GenericAlias(dict, (str, int))
   True

> *Added in 3.9*

> *Changed in 3.9.2*: This type can now be subclassed.

> **Seealso**
>
> `Generic Alias Types`
>    In-depth documentation on instances of `types.GenericAlias`
>
> PEP 585 - Type Hinting Generics In Standard Collections
>    Introducing the `types.GenericAlias` class
>
