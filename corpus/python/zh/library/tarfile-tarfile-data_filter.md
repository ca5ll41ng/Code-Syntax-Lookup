---
id: "python-zh-function-tarfile-data_filter"
language: "python"
lang: "zh"
category: "function"
name: "data_filter"
signature: "data_filter(member, path)"
directive: "function"
module: "tarfile"
source_url: "https://docs.python.org/zh-cn/3/library/tarfile.html#tarfile.data_filter"
license: "PSF"
updated: "2026-10-01"
---

# data_filter

Implements the `'data'` filter.
In addition to what `tar_filter` does:

- Normalize link targets (`TarInfo.linkname`) using
  `os.path.normpath`.
  Note that this removes internal `..` components, which may change the
  meaning of the link if the path in `TarInfo.linkname` traverses
  symbolic links.

- `Refuse` to extract links (hard or soft)
  that link to absolute paths, or ones that link outside the destination.

  This raises `~tarfile.AbsoluteLinkError` or
  `~tarfile.LinkOutsideDestinationError`.

  Note that such files are refused even on platforms that do not support
  symbolic links.

- `Refuse` to extract device files
  (including pipes).
  This raises `~tarfile.SpecialFileError`.

- For regular files, including hard links:

  - Set the owner read and write permissions
    (`~stat.S_IRUSR`  `~stat.S_IWUSR`).
  - Remove the group & other executable permission
    (`~stat.S_IXGRP`  `~stat.S_IXOTH`)
    if the owner doesn’t have it (`~stat.S_IXUSR`).

- For other files (directories), set `mode` to `None`, so
  that extraction methods skip applying permission bits.
- Set user and group info (`uid`, `gid`, `uname`, `gname`)
  to `None`, so that extraction methods skip setting it.

返回修改后的 ``TarInfo`` 成员。

Note that this filter does not block *all* dangerous archive features.
See `tarfile-further-verification`  for details.

> *Changed in 3.15*: Link targets are now normalized.
