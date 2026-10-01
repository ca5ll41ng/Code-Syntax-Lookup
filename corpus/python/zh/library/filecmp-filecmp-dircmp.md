---
id: "python-zh-function-filecmp-dircmp"
language: "python"
lang: "zh"
category: "function"
name: "dircmp"
signature: "dircmp(a, b, ignore=None, hide=None, *, shallow=True)"
directive: "class"
module: "filecmp"
source_url: "https://docs.python.org/zh-cn/3/library/filecmp.html#filecmp.dircmp"
license: "PSF"
updated: "2026-10-01"
---

# dircmp

Construct a new directory comparison object, to compare the directories *a*
and *b*.  *ignore* is a list of names to ignore, and defaults to
`filecmp.DEFAULT_IGNORES`.  *hide* is a list of names to hide, and
defaults to `[os.curdir, os.pardir]`.

The `dircmp` class compares files by doing *shallow* comparisons
as described for `filecmp.cmp` by default using the *shallow*
parameter.

> *Changed in 3.13*: Added the *shallow* parameter.

:class:`dircmp` 类提供以下方法：

method:: report()

method:: report_partial_closure()

method:: report_full_closure()

The `dircmp` class offers a number of interesting attributes that may be
used to get various bits of information about the directory trees being
compared.

Note that via `~object.__getattr__` hooks, all attributes are computed lazily,
so there is no speed penalty if only those attributes which are lightweight
to compute are used.

attribute:: left

attribute:: right

attribute:: left_list

attribute:: right_list

attribute:: common

attribute:: left_only

attribute:: right_only

attribute:: common_dirs

attribute:: common_files

attribute:: common_funny

attribute:: same_files

attribute:: diff_files

attribute:: funny_files

attribute:: subdirs
