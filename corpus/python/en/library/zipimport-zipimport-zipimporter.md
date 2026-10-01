---
id: "python-en-function-zipimport-zipimporter"
language: "python"
lang: "en"
category: "function"
name: "zipimporter"
signature: "zipimporter(archivepath)"
directive: "class"
module: "zipimport"
source_url: "https://docs.python.org/3/library/zipimport.html#zipimport.zipimporter"
license: "PSF"
updated: "2026-10-01"
---

# zipimporter

Create a new zipimporter instance. *archivepath* must be a path to a ZIP
file, or to a specific path within a ZIP file.  For example, an *archivepath*
of `foo/bar.zip/lib` will look for modules in the `lib` directory
inside the ZIP file `foo/bar.zip` (provided that it exists).

`ZipImportError` is raised if *archivepath* doesn't point to a valid ZIP
archive.

> *Changed in 3.12*: Methods ``find_loader()`` and ``find_module()``, deprecated in 3.10 are now removed.  Use :meth:`find_spec` instead.

method:: create_module(spec)

method:: exec_module(module)

method:: find_spec(fullname, target=None)

method:: get_code(fullname)

method:: get_data(pathname)

method:: get_filename(fullname)

method:: get_source(fullname)

method:: is_package(fullname)

method:: invalidate_caches()

attribute:: archive

attribute:: prefix

The `archive` and `prefix` attributes, when combined with a
slash, equal the original *archivepath* argument given to the
`zipimporter` constructor.
