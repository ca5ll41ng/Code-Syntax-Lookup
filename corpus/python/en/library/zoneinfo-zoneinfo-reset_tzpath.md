---
id: "python-en-function-zoneinfo-reset_tzpath"
language: "python"
lang: "en"
category: "function"
name: "reset_tzpath"
signature: "reset_tzpath(to=None)"
directive: "function"
module: "zoneinfo"
source_url: "https://docs.python.org/3/library/zoneinfo.html#zoneinfo.reset_tzpath"
license: "PSF"
updated: "2026-10-01"
---

# reset_tzpath

Sets or resets the time zone search path (`TZPATH`) for the module.
When called with no arguments, `TZPATH` is set to the default value.

Calling `reset_tzpath` will not invalidate the `ZoneInfo` cache,
and so calls to the primary `ZoneInfo` constructor will only use the new
`TZPATH` in the case of a cache miss.

The `to` parameter must be a `sequence` of strings or
`os.PathLike` and not a string, all of which must be absolute paths.
`ValueError` will be raised if something other than an absolute path
is passed.
