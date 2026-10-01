---
id: "python-en-function-platform-system"
language: "python"
lang: "en"
category: "function"
name: "system"
signature: "system()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.system"
license: "PSF"
updated: "2026-10-01"
---

# system

Returns the system/OS name, such as `'Linux'`, `'Darwin'`, `'Java'`,
`'Windows'`. An empty string is returned if the value cannot be determined.

On iOS and Android, this returns the user-facing OS name (i.e, `'iOS`,
`'iPadOS'` or `'Android'`). To obtain the kernel name (`'Darwin'` or
`'Linux'`), use `os.uname`.
