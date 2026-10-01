---
id: "python-en-function-pathlib-purepath"
language: "python"
lang: "en"
category: "function"
name: "PurePath"
signature: "PurePath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath"
license: "PSF"
updated: "2026-10-01"
---

# PurePath

A generic class that represents the system's path flavour (instantiating
it creates either a `PurePosixPath` or a `PureWindowsPath`)::

   >>> PurePath('setup.py')      # Running on a Unix machine
   PurePosixPath('setup.py')

Each element of *pathsegments* can be either a string representing a
path segment, or an object implementing the `os.PathLike` interface
where the `~os.PathLike.__fspath__` method returns a string,
such as another path object::

   >>> PurePath('foo', 'some/path', 'bar')
   PurePosixPath('foo/some/path/bar')
   >>> PurePath(Path('foo'), Path('bar'))
   PurePosixPath('foo/bar')

When *pathsegments* is empty or consists only of empty strings,
the current directory is assumed::

   >>> PurePath(), PurePath('')
   (PurePosixPath('.'), PurePosixPath('.'))

If a segment is an absolute path, all previous segments are ignored
(like `os.path.join`)::

   >>> PurePath('/etc', '/usr', 'lib64')
   PurePosixPath('/usr/lib64')
   >>> PureWindowsPath('c:/Windows', 'd:bar')
   PureWindowsPath('d:bar')

On Windows, the drive is not reset when a rooted relative path
segment (e.g., `r'\foo'`) is encountered::

   >>> PureWindowsPath('c:/Windows', '/Program Files')
   PureWindowsPath('c:/Program Files')

Spurious slashes and single dots are collapsed, but double dots (`'..'`)
and leading double slashes (`'//'`) are not, since this would change the
meaning of a path for various reasons (e.g. symbolic links, UNC paths)::

   >>> PurePath('foo//bar')
   PurePosixPath('foo/bar')
   >>> PurePath('//foo/bar')
   PurePosixPath('//foo/bar')
   >>> PurePath('foo/./bar')
   PurePosixPath('foo/bar')
   >>> PurePath('foo/../bar')
   PurePosixPath('foo/../bar')

(a naïve approach would make `PurePosixPath('foo/../bar')` equivalent
to `PurePosixPath('bar')`, which is wrong if `foo` is a symbolic link
to another directory)

Pure path objects implement the `os.PathLike` interface, allowing them
to be used anywhere the interface is accepted.

> *Changed in 3.6*: Added support for the :class:`os.PathLike` interface.
