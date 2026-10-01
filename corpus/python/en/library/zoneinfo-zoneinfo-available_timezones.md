---
id: "python-en-function-zoneinfo-available_timezones"
language: "python"
lang: "en"
category: "function"
name: "available_timezones"
signature: "available_timezones()"
directive: "function"
module: "zoneinfo"
source_url: "https://docs.python.org/3/library/zoneinfo.html#zoneinfo.available_timezones"
license: "PSF"
updated: "2026-10-01"
---

# available_timezones

Get a set containing all the valid keys for IANA time zones available
anywhere on the time zone path. This is recalculated on every call to the
function.

This function only includes canonical zone names and does not include
"special" zones such as those under the `posix/` and `right/`
directories, the `posixrules`  or the `localtime` zone.

> **Caution**
>
> This function may open a large number of files, as the best way to
> determine if a file on the time zone path is a valid time zone is to
> read the "magic string" at the beginning.
>

> **Note**
>
> These values are not designed to be exposed to end-users; for user
> facing elements, applications should use something like CLDR (the
> Unicode Common Locale Data Repository) to get more user-friendly
> strings. See also the cautionary note on `ZoneInfo.key`.
>
