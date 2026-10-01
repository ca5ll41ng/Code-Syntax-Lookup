---
id: "java-en-function-zoneoffset-oftotalseconds"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.ofTotalSeconds"
signature: "public static ZoneOffset ofTotalSeconds(int totalSeconds)"
title: "ZoneOffset.ofTotalSeconds"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.ofTotalSeconds

```java
public static ZoneOffset ofTotalSeconds(int totalSeconds)
```

Obtains an instance of `ZoneOffset` specifying the total offset in seconds
 

 The offset must be in the range `-18:00` to `+18:00`, which corresponds to -64,800 to +64,800.

**参数**

- **totalSeconds** — the total time-zone offset in seconds, from -64,800 to +64,800

**返回**

- the ZoneOffset, not null

**异常**

- **DateTimeException** — if the offset is not in the required range
