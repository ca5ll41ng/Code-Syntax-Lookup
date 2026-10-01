---
id: "python-en-function-stat-s_isgid"
language: "python"
lang: "en"
category: "function"
name: "S_ISGID"
directive: "data"
module: "stat"
source_url: "https://docs.python.org/3/library/stat.html#stat.S_ISGID"
license: "PSF"
updated: "2026-10-01"
---

# S_ISGID

Set-group-ID bit.  This bit has several special uses.  For a directory
it indicates that BSD semantics is to be used for that directory:
files created there inherit their group ID from the directory, not
from the effective group ID of the creating process, and directories
created there will also get the `S_ISGID` bit set.  For a
file that does not have the group execution bit (`S_IXGRP`)
set, the set-group-ID bit indicates mandatory file/record locking
(see also `S_ENFMT`).
