---
id: "java-en-function-zoneoffset-ofhoursminutesseconds"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.ofHoursMinutesSeconds"
signature: "public static ZoneOffset ofHoursMinutesSeconds(int hours, int minutes, int seconds)"
title: "ZoneOffset.ofHoursMinutesSeconds"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.ofHoursMinutesSeconds

```java
public static ZoneOffset ofHoursMinutesSeconds(int hours, int minutes, int seconds)
```

Obtains an instance of `ZoneOffset` using an offset in
 hours, minutes and seconds.
 

 The sign of the hours, minutes and seconds components must match.
 Thus, if the hours is negative, the minutes and seconds must be negative or zero.

**参数**

- **hours** — the time-zone offset in hours, from -18 to +18
- **minutes** — the time-zone offset in minutes, from 0 to &plusmn;59, sign matches hours and seconds
- **seconds** — the time-zone offset in seconds, from 0 to &plusmn;59, sign matches hours and minutes

**返回**

- the zone-offset, not null

**异常**

- **DateTimeException** — if the offset is not in the required range
