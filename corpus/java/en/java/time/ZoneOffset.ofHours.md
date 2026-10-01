---
id: "java-en-function-zoneoffset-ofhours"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.ofHours"
signature: "public static ZoneOffset ofHours(int hours)"
title: "ZoneOffset.ofHours"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.ofHours

```java
public static ZoneOffset ofHours(int hours)
```

Obtains an instance of `ZoneOffset` using an offset in hours.

**参数**

- **hours** — the time-zone offset in hours, from -18 to +18

**返回**

- the zone-offset, not null

**异常**

- **DateTimeException** — if the offset is not in the required range
