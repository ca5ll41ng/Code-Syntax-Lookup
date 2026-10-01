---
id: "java-en-function-clock-getzone"
language: "java"
lang: "en"
category: "function"
name: "Clock.getZone"
signature: "public abstract ZoneId getZone()"
title: "Clock.getZone"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock.getZone

```java
public abstract ZoneId getZone()
```

Gets the time-zone being used to create dates and times.
 

 A clock will typically obtain the current instant and then convert that
 to a date or time using a time-zone. This method returns the time-zone used.

**返回**

- the time-zone being used to interpret instants, not null
