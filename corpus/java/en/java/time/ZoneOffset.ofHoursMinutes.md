---
id: "java-en-function-zoneoffset-ofhoursminutes"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.ofHoursMinutes"
signature: "public static ZoneOffset ofHoursMinutes(int hours, int minutes)"
title: "ZoneOffset.ofHoursMinutes"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.ofHoursMinutes

```java
public static ZoneOffset ofHoursMinutes(int hours, int minutes)
```

Obtains an instance of `ZoneOffset` using an offset in
 hours and minutes.
 

 The sign of the hours and minutes components must match.
 Thus, if the hours is negative, the minutes must be negative or zero.
 If the hours is zero, the minutes may be positive, negative or zero.

**参数**

- **hours** — the time-zone offset in hours, from -18 to +18
- **minutes** — the time-zone offset in minutes, from 0 to &plusmn;59, sign matches hours

**返回**

- the zone-offset, not null

**异常**

- **DateTimeException** — if the offset is not in the required range
