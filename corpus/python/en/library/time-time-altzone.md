---
id: "python-en-function-time-altzone"
language: "python"
lang: "en"
category: "function"
name: "altzone"
directive: "data"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.altzone"
license: "PSF"
updated: "2026-10-01"
---

# altzone

The offset of the local DST timezone, in seconds west of UTC, if one is defined.
This is negative if the local DST timezone is east of UTC (as in Western Europe,
including the UK).  Only use this if `daylight` is nonzero.  See note below.
