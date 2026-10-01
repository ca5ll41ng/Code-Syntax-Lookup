---
id: "python-en-function-tarfile-tar_filter"
language: "python"
lang: "en"
category: "function"
name: "tar_filter"
signature: "tar_filter(member, path)"
directive: "function"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.tar_filter"
license: "PSF"
updated: "2026-10-01"
---

# tar_filter

Implements the `'tar'` filter.

- Strip leading slashes (`/` and `os.sep`) from filenames.
- `Refuse` to extract files with absolute
  paths (in case the name is absolute
  even after stripping slashes, e.g. `C:/foo` on Windows).
  This raises `~tarfile.AbsolutePathError`.
- Normalize filenames (`TarInfo.name`) that contain `..` components
  using `os.path.normpath`.
  Note that this removes internal `..` components, which may change the
  meaning of the name if it traverses symbolic links.
- `Refuse` to extract files whose absolute
  path (after following symlinks) would end up outside the destination.
  This raises `~tarfile.OutsideDestinationError`.
- Clear high mode bits (setuid, setgid, sticky) and group/other write bits
  (`~stat.S_IWGRP` | `~stat.S_IWOTH`).

Return the modified `TarInfo` member.

> *Changed in next*: Filenames containing ``..`` components are now normalized.
