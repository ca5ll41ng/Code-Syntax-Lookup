---
id: "python-en-function-test-make_zip_script"
language: "python"
lang: "en"
category: "function"
name: "make_zip_script"
signature: "make_zip_script(zip_dir, zip_basename, script_name, name_in_zip=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.make_zip_script"
license: "PSF"
updated: "2026-10-01"
---

# make_zip_script

Create zip file at *zip_dir* and *zip_basename* with extension `zip` which
contains the files in *script_name*. *name_in_zip* is the archive name.
Return a tuple containing `(full path, full path of archive name)`.
