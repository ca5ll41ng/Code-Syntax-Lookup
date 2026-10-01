---
id: "python-en-function-zoneinfo-tzpath"
language: "python"
lang: "en"
category: "function"
name: "TZPATH"
directive: "data"
module: "zoneinfo"
source_url: "https://docs.python.org/3/library/zoneinfo.html#zoneinfo.TZPATH"
license: "PSF"
updated: "2026-10-01"
---

# TZPATH

A read-only sequence representing the time zone search path -- when
constructing a `ZoneInfo` from a key, the key is joined to each entry in
the `TZPATH`, and the first file found is used.

`TZPATH` may contain only absolute paths, never relative paths,
regardless of how it is configured.

The object that `zoneinfo.TZPATH` points to may change in response to a
call to `reset_tzpath`, so it is recommended to use
`zoneinfo.TZPATH` rather than importing `TZPATH` from `zoneinfo` or
assigning a long-lived variable to `zoneinfo.TZPATH`.

For more information on configuring the time zone search path, see
`zoneinfo_data_configuration`.
