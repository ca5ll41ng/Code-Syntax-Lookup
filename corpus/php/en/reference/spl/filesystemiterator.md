---
id: "en-php-guide-class-filesystemiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.filesystemiterator"
title: "The FilesystemIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.filesystemiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The FilesystemIterator class

FilesystemIterator

   Introduction  The Filesystem iterator      Class Synopsis    `FilesystemIterator`   `extends` `DirectoryIterator`    `public` `const` `int` `FilesystemIterator::CURRENT_MODE_MASK`   `public` `const` `int` `FilesystemIterator::CURRENT_AS_PATHNAME`   `public` `const` `int` `FilesystemIterator::CURRENT_AS_FILEINFO`   `public` `const` `int` `FilesystemIterator::CURRENT_AS_SELF`   `public` `const` `int` `FilesystemIterator::KEY_MODE_MASK`   `public` `const` `int` `FilesystemIterator::KEY_AS_PATHNAME`   `public` `const` `int` `FilesystemIterator::FOLLOW_SYMLINKS`   `public` `const` `int` `FilesystemIterator::KEY_AS_FILENAME`   `public` `const` `int` `FilesystemIterator::NEW_CURRENT_AND_KEY`   `public` `const` `int` `FilesystemIterator::OTHER_MODE_MASK`   `public` `const` `int` `FilesystemIterator::SKIP_DOTS`   `public` `const` `int` `FilesystemIterator::UNIX_PATHS`             Predefined Constants 
- **`FilesystemIterator::CURRENT_AS_PATHNAME`** — Makes `FilesystemIterator::current()` return the pathname.
- **`FilesystemIterator::CURRENT_AS_FILEINFO`** — Makes `FilesystemIterator::current()` return an `SplFileInfo` instance.
- **`FilesystemIterator::CURRENT_AS_SELF`** — Makes `FilesystemIterator::current()` return $this (the FilesystemIterator).
- **`FilesystemIterator::CURRENT_MODE_MASK`** — Masks `FilesystemIterator::current()`
- **`FilesystemIterator::KEY_AS_PATHNAME`** — Makes `FilesystemIterator::key()` return the pathname.
- **`FilesystemIterator::KEY_AS_FILENAME`** — Makes `FilesystemIterator::key()` return the filename.
- **`FilesystemIterator::FOLLOW_SYMLINKS`** — Makes `RecursiveDirectoryIterator::hasChildren()` follow symlinks.
- **`FilesystemIterator::KEY_MODE_MASK`** — Masks `FilesystemIterator::key()`
- **`FilesystemIterator::NEW_CURRENT_AND_KEY`** — Same as `FilesystemIterator::KEY_AS_FILENAME | FilesystemIterator::CURRENT_AS_FILEINFO`.
- **`FilesystemIterator::OTHER_MODE_MASK`** — Mask used for `FilesystemIterator::getFlags()` and `FilesystemIterator::setFlags()`.
- **`FilesystemIterator::SKIP_DOTS`** — Skips dot files (`.` and `..`).
- **`FilesystemIterator::UNIX_PATHS`** — Makes paths use Unix-style forward slash irrespective of system default. Note that the `$path` that is passed to the constructor is not modified.

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
