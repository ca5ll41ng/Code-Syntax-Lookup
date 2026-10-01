---
id: "python-en-function-filecmp-filecmp"
language: "python"
lang: "en"
category: "function"
name: "filecmp"
title: "Here is a simplified example of using the `subdirs` attribute to search"
directive: "module"
module: "filecmp"
source_url: "https://docs.python.org/3/library/filecmp.html#module-filecmp"
license: "PSF"
updated: "2026-10-01"
---

# Here is a simplified example of using the `subdirs` attribute to search

Here is a simplified example of using the `subdirs` attribute to search
recursively through two directories to show common different files::

    >>> from filecmp import dircmp
    >>> def print_diff_files(dcmp):
    ...     for name in dcmp.diff_files:
    ...         print("diff_file %s found in %s and %s" % (name, dcmp.left,
    ...               dcmp.right))
    ...     for sub_dcmp in dcmp.subdirs.values():
    ...         print_diff_files(sub_dcmp)
    ...
    >>> dcmp = dircmp('dir1', 'dir2') # doctest: +SKIP
    >>> print_diff_files(dcmp) # doctest: +SKIP
