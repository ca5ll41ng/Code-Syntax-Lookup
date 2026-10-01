---
id: "python-en-function-importlib-modulespec"
language: "python"
lang: "en"
category: "function"
name: "ModuleSpec"
signature: "ModuleSpec(name, loader, *, origin=None, loader_state=None, is_package=None)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.ModuleSpec"
license: "PSF"
updated: "2026-10-01"
---

# ModuleSpec

A specification for a module's import-system-related state.  This is
typically exposed as the module's `~module.__spec__` attribute.  Many
of these attributes are also available directly on a module: for example,
`module.__spec__.origin == module.__file__`.  Note, however, that
while the *values* are usually equivalent, they can differ since there is
no synchronization between the two objects.  For example, it is possible to
update the module's `~module.__file__` at runtime and this will not be
automatically reflected in the module's
`__spec__.origin`, and vice versa.

> *Added in 3.4*

attribute:: name

attribute:: loader

attribute:: origin

attribute:: submodule_search_locations

attribute:: loader_state

attribute:: cached

attribute:: parent

attribute:: has_location
