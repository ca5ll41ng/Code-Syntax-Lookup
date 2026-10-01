---
id: "python-en-function-shutil-which"
language: "python"
lang: "en"
category: "function"
name: "which"
signature: "which(cmd, mode=os.F_OK | os.X_OK, path=None)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.which"
license: "PSF"
updated: "2026-10-01"
---

# which

Return the path to an executable which would be run if the given *cmd* was
called.  If no *cmd* would be called, return `None`.

*mode* is a permission mask passed to `os.access`, by default
determining if the file exists and is executable.

*path* is a "`PATH` string" specifying the directories to look in,
delimited by `os.pathsep`. When no *path* is specified, the
`PATH` environment variable is read from `os.environ`,
falling back to `os.defpath` if it is not set.

If *cmd* contains a directory component, `which` only checks the
specified path directly and does not search the directories listed in
*path* or in the system's `PATH` environment variable.

On Windows, the current directory is prepended to the *path* if *mode* does
not include `os.X_OK`. When the *mode* does include `os.X_OK`, the
Windows API `NeedCurrentDirectoryForExePathW` will be consulted to
determine if the current directory should be prepended to *path*. To avoid
consulting the current working directory for executables: set the environment
variable `NoDefaultCurrentDirectoryInExePath`.

Also on Windows, the `PATHEXT` environment variable is used to
resolve commands that may not already include an extension. For example,
if you call `shutil.which("python")`, `which` will search `PATHEXT`
to know that it should look for `python.exe` within the *path*
directories. For example, on Windows::

   >>> shutil.which("python")
   'C:\\Python33\\python.EXE'

This is also applied when *cmd* is a path that contains a directory
component::

   >>> shutil.which("C:\\Python33\\python")
   'C:\\Python33\\python.EXE'

> *Added in 3.3*

> *Changed in 3.8*: The :class:`bytes` type is now accepted.  If *cmd* type is :class:`bytes`, the result type is also :class:`bytes`.

> *Changed in 3.12*: On Windows, the current directory is no longer prepended to the search path if *mode* includes ``os.X_OK`` and WinAPI ``NeedCurrentDirectoryForExePathW(cmd)`` is false, else the current directory is prepended even if it is already in the search path; ``PATHEXT`` is used now even when *cmd* includes a directory component or ends with an extension that is in ``PATHEXT``; and filenames that have no extension can now be found.
