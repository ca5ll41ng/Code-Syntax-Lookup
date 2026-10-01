---
id: "python-en-function-os-listvolumes"
language: "python"
lang: "en"
category: "function"
name: "listvolumes"
signature: "listvolumes()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.listvolumes"
license: "PSF"
updated: "2026-10-01"
---

# listvolumes

Return a list containing the volumes in the system.

Volumes are typically represented as a GUID path that looks like
`\\?\Volume{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}\`. Files can
usually be accessed through a GUID path, permissions allowing.
However, users are generally not familiar with them, and so the
recommended use of this function is to retrieve mount points
using `os.listmounts`.

May raise `OSError` if an error occurs collecting the volumes.

audit-event:: os.listvolumes "" os.listvolumes

availability:: Windows

> *Added in 3.12*
