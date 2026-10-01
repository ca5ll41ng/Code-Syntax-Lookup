---
id: "java-en-function-clock-withzone"
language: "java"
lang: "en"
category: "function"
name: "Clock.withZone"
signature: "public abstract Clock withZone(ZoneId zone)"
title: "Clock.withZone"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.withZone

```java
public abstract Clock withZone(ZoneId zone)
```

Returns a copy of this clock with a different time-zone.
 

 A clock will typically obtain the current instant and then convert that
 to a date or time using a time-zone. This method returns a clock with
 similar properties but using a different time-zone.

**参数**

- **zone** — the time-zone to change to, not null

**返回**

- a clock based on this clock with the specified time-zone, not null
