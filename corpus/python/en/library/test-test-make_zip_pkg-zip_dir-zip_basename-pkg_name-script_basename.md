---
id: "python-en-function-test-make_zip_pkg-zip_dir-zip_basename-pkg_name-script_basename"
language: "python"
lang: "en"
category: "function"
name: "make_zip_pkg(zip_dir, zip_basename, pkg_name, script_basename, \\"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.make_zip_pkg(zip_dir, zip_basename, pkg_name, script_basename, \\"
license: "PSF"
updated: "2026-10-01"
---

# make_zip_pkg(zip_dir, zip_basename, pkg_name, script_basename, \

Create a zip package directory with a path of *zip_dir* and *zip_basename*
containing an empty `__init__` file and a file *script_basename*
containing the *source*.  If *compiled* is `True`, both source files will
be compiled and added to the zip package.  Return a tuple of the full zip
path and the archive name for the zip file.
