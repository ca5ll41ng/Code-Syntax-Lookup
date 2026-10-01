---
id: "python-en-function-shutil-copy_function-copy2-ignore_dangling_symlinks-false"
language: "python"
lang: "en"
category: "function"
name: "copy_function=copy2, ignore_dangling_symlinks=False, \\"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.copy_function=copy2, ignore_dangling_symlinks=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# copy_function=copy2, ignore_dangling_symlinks=False, \

Recursively copy an entire directory tree rooted at *src* to a directory
named *dst* and return the destination directory.  All intermediate
directories needed to contain *dst* will also be created by default.

Permissions and times of directories are copied with `copystat`,
individual files are copied using `~shutil.copy2`.

If *symlinks* is true, symbolic links in the source tree are represented as
symbolic links in the new tree and the metadata of the original links will
be copied as far as the platform allows; if false or omitted, the contents
and metadata of the linked files are copied to the new tree.

When *symlinks* is false, if the file pointed to by the symlink doesn't
exist, an exception will be added in the list of errors raised in
an `Error` exception at the end of the copy process.
You can set the optional *ignore_dangling_symlinks* flag to true if you
want to silence this exception. Notice that this option has no effect
on platforms that don't support `os.symlink`.

If *ignore* is given, it must be a callable that will receive as its
arguments the directory being visited by `copytree`, and a list of its
contents, as returned by `os.listdir`.  Since `copytree` is
called recursively, the *ignore* callable will be called once for each
directory that is copied.  The callable must return a sequence of directory
and file names relative to the current directory (i.e. a subset of the items
in its second argument); these names will then be ignored in the copy
process.  `ignore_patterns` can be used to create such a callable that
ignores names based on glob-style patterns.

If exception(s) occur, an `Error` is raised with a list of reasons.

If *copy_function* is given, it must be a callable that will be used to copy
each file. It will be called with the source path and the destination path
as arguments. By default, `~shutil.copy2` is used, but any function
that supports the same signature (like `~shutil.copy`) can be used.

If *dirs_exist_ok* is false (the default) and *dst* already exists, a
`FileExistsError` is raised. If *dirs_exist_ok* is true, the copying
operation will continue if it encounters existing directories, and files
within the *dst* tree will be overwritten by corresponding files from the
*src* tree.

audit-event:: shutil.copytree src,dst shutil.copytree

> *Changed in 3.2*: Added the *copy_function* argument to be able to provide a custom copy function. Added the *ignore_dangling_symlinks* argument to silence dangling symlinks errors when *symlinks* is false.

> *Changed in 3.3*: Copy metadata when *symlinks* is false. Now returns *dst*.

> *Changed in 3.8*: Platform-specific fast-copy syscalls may be used internally in order to copy the file more efficiently. See :ref:`shutil-platform-dependent-efficient-copy-operations` section.

> *Changed in 3.8*: Added the *dirs_exist_ok* parameter.
