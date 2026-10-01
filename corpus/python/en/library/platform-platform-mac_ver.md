---
id: "python-en-function-platform-mac_ver"
language: "python"
lang: "en"
category: "function"
name: "mac_ver"
signature: "mac_ver(release='', versioninfo=('','',''), machine='')"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.mac_ver"
license: "PSF"
updated: "2026-10-01"
---

# mac_ver

Get macOS version information and return it as tuple `(release, versioninfo,
machine)` with *versioninfo* being a tuple `(version, dev_stage,
non_release_version)`.

Entries which cannot be determined are set to `''`.  All tuple entries are
strings.
