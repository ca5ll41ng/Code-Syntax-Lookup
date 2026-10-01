---
id: "java-en-function-chronology-epochsecond"
language: "java"
lang: "en"
category: "function"
name: "Chronology.epochSecond"
signature: "default long epochSecond(int prolepticYear, int month, int dayOfMonth, int hour, int minute, int second, ZoneOffset zoneOffset)"
title: "Chronology.epochSecond"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.epochSecond

```java
default long epochSecond(int prolepticYear, int month, int dayOfMonth, int hour, int minute, int second, ZoneOffset zoneOffset)
```

Gets the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 

 The number of seconds is calculated using the proleptic-year,
 month, day-of-month, hour, minute, second, and zoneOffset.

**参数**

- **prolepticYear** — the chronology proleptic-year
- **month** — the chronology month-of-year
- **dayOfMonth** — the chronology day-of-month
- **hour** — the hour-of-day, from 0 to 23
- **minute** — the minute-of-hour, from 0 to 59
- **second** — the second-of-minute, from 0 to 59
- **zoneOffset** — the zone offset, not null

**返回**

- the number of seconds relative to 1970-01-01T00:00:00Z, may be negative

**异常**

- **DateTimeException** — if any of the values are out of range

> *Since 9*
