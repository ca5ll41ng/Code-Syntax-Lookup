---
id: "python-en-function-platform-release"
language: "python"
lang: "en"
category: "function"
name: "release"
signature: "release()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.release"
license: "PSF"
updated: "2026-10-01"
---

# release

Returns the system's release, e.g. `'2.2.0'` or `'NT'`. An empty string is
returned if the value cannot be determined.

On iOS and Android, this is the user-facing OS release. To obtain the
Darwin or Linux kernel release, use `os.uname`.
