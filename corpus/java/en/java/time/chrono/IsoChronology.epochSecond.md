---
id: "java-en-function-isochronology-epochsecond"
language: "java"
lang: "en"
category: "function"
name: "IsoChronology.epochSecond"
signature: "public long epochSecond(int prolepticYear, int month, int dayOfMonth, int hour, int minute, int second, ZoneOffset zoneOffset)"
title: "IsoChronology.epochSecond"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoChronology.epochSecond

```java
public long epochSecond(int prolepticYear, int month, int dayOfMonth, int hour, int minute, int second, ZoneOffset zoneOffset)
```

Gets the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 

 The number of seconds is calculated using the year,
 month, day-of-month, hour, minute, second, and zoneOffset.

**参数**

- **prolepticYear** — the year, from MIN_YEAR to MAX_YEAR
- **month** — the month-of-year, from 1 to 12
- **dayOfMonth** — the day-of-month, from 1 to 31
- **hour** — the hour-of-day, from 0 to 23
- **minute** — the minute-of-hour, from 0 to 59
- **second** — the second-of-minute, from 0 to 59
- **zoneOffset** — the zone offset, not null

**返回**

- the number of seconds relative to 1970-01-01T00:00:00Z, may be negative

**异常**

- **DateTimeException** — if the value of any argument is out of range, or if the day-of-month is invalid for the month-of-year

> *Since 9*
