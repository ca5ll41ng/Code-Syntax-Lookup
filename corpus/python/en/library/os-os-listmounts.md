---
id: "python-en-function-os-listmounts"
language: "python"
lang: "en"
category: "function"
name: "listmounts"
signature: "listmounts(volume)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.listmounts"
license: "PSF"
updated: "2026-10-01"
---

# listmounts

Return a list containing the mount points for a volume on a Windows
system.

*volume* must be represented as a GUID path, like those returned by
`os.listvolumes`. Volumes may be mounted in multiple locations
or not at all. In the latter case, the list will be empty. Mount
points that are not associated with a volume will not be returned by
this function.

The mount points return by this function will be absolute paths, and
may be longer than the drive name.

Raises `OSError` if the volume is not recognized or if an error
occurs collecting the paths.

audit-event:: os.listmounts volume os.listmounts

availability:: Windows

> *Added in 3.12*
