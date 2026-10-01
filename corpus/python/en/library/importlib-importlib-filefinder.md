---
id: "python-en-function-importlib-filefinder"
language: "python"
lang: "en"
category: "function"
name: "FileFinder"
signature: "FileFinder(path, *loader_details)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.FileFinder"
license: "PSF"
updated: "2026-10-01"
---

# FileFinder

A concrete implementation of `importlib.abc.PathEntryFinder` which
caches results from the file system.

The *path* argument is the directory for which the finder is in charge of
searching.

The *loader_details* argument is a variable number of 2-item tuples each
containing a loader and a sequence of file suffixes the loader recognizes.
The loaders are expected to be callables which accept two arguments of
the module's name and the path to the file found.

The finder will cache the directory contents as necessary, making stat calls
for each module search to verify the cache is not outdated. Because cache
staleness relies upon the granularity of the operating system's state
information of the file system, there is a potential race condition of
searching for a module, creating a new file, and then searching for the
module the new file represents. If the operations happen fast enough to fit
within the granularity of stat calls, then the module search will fail. To
prevent this from happening, when you create a module dynamically, make sure
to call `importlib.invalidate_caches`.

> *Added in 3.3*

attribute:: path

method:: find_spec(fullname, target=None)

method:: invalidate_caches()

classmethod:: path_hook(*loader_details)
