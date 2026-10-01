---
id: "python-en-function-os-startfile"
language: "python"
lang: "en"
category: "function"
name: "startfile"
signature: "startfile(path, [operation], [arguments], [cwd], [show_cmd])"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.startfile"
license: "PSF"
updated: "2026-10-01"
---

# startfile

Start a file with its associated application.

When *operation* is not specified, this acts like double-clicking
the file in Windows Explorer, or giving the file name as an argument to the
`start` command from the interactive command shell: the file is opened
with whatever application (if any) its extension is associated.

When another *operation* is given, it must be a "command verb" that specifies
what should be done with the file. Common verbs documented by Microsoft are `'open'`,
`'print'` and  `'edit'` (to be used on files) as well as `'explore'` and
`'find'` (to be used on directories).

When launching an application, specify *arguments* to be passed as a single
string. This argument may have no effect when using this function to launch a
document.

The default working directory is inherited, but may be overridden by the *cwd*
argument. This should be an absolute path. A relative *path* will be resolved
against this argument.

Use *show_cmd* to override the default window style. Whether this has any
effect will depend on the application being launched. Values are integers as
supported by the Win32 :c`ShellExecute` function.

`startfile` returns as soon as the associated application is launched.
There is no option to wait for the application to close, and no way to retrieve
the application's exit status.  The *path* parameter is relative to the current
directory or *cwd*.  If you want to use an absolute path, make sure the first
character is not a slash (`'/'`)  Use `pathlib` or the
`os.path.normpath` function to ensure that paths are properly encoded for
Win32.

To reduce interpreter startup overhead, the Win32 :c`ShellExecute`
function is not resolved until this function is first called.  If the function
cannot be resolved, `NotImplementedError` will be raised.

audit-event:: os.startfile path,operation os.startfile

audit-event:: os.startfile/2 path,operation,arguments,cwd,show_cmd os.startfile

availability:: Windows.

> *Changed in 3.10*: Added the *arguments*, *cwd* and *show_cmd* arguments, and the ``os.startfile/2`` audit event.
