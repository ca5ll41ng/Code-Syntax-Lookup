---
id: "python-zh-function-importlib-resources-abc-resourcereader"
language: "python"
lang: "zh"
category: "function"
name: "ResourceReader"
directive: "class"
module: "importlib.resources.abc"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.abc.html#importlib.resources.abc.ResourceReader"
license: "PSF"
updated: "2026-10-01"
---

# ResourceReader

*被 TraversableResources 取代*

An `abstract base class` to provide the ability to read
*resources*.

From the perspective of this ABC, a *resource* is a binary
artifact that is shipped within a package. Typically this is
something like a data file that lives next to the `__init__.py`
file of the package. The purpose of this class is to help abstract
out the accessing of such data files so that it does not matter if
the package and its data file(s) are stored e.g. in a zip file
versus on the file system.

For any of methods of this class, a *resource* argument is
expected to be a `path-like object` which represents
conceptually just a file name. This means that no subdirectory
paths should be included in the *resource* argument. This is
because the location of the package the reader is for, acts as the
"directory". Hence the metaphor for directories and file
names is packages and resources, respectively. This is also why
instances of this class are expected to directly correlate to
a specific package (instead of potentially representing multiple
packages or a module).

Loaders that wish to support resource reading are expected to
provide a method called `get_resource_reader(fullname)` which
returns an object implementing this ABC's interface. If the module
specified by fullname is not a package, this method should return
`None`. An object compatible with this ABC should only be
returned when the specified module is a package.

> *Deprecated since 3.12*: Use :class:`importlib.resources.abc.TraversableResources` instead.

method:: open_resource(resource)

method:: resource_path(resource)

method:: is_resource(path)

method:: contents()
