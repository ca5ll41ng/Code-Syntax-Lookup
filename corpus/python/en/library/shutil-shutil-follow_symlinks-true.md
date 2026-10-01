---
id: "python-en-function-shutil-follow_symlinks-true"
language: "python"
lang: "en"
category: "function"
name: "follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.follow_symlinks=True)"
license: "PSF"
updated: "2026-10-01"
---

# follow_symlinks=True)

Change owner *user* and/or *group* of the given *path*.

*user* can be a system user name or a uid; the same applies to *group*. At
least one argument is required.

See also `os.chown`, the underlying function.

audit-event:: shutil.chown path,user,group shutil.chown

availability:: Unix.

> *Added in 3.3*

> *Changed in 3.13*: Added *dir_fd* and *follow_symlinks* parameters.
