---
id: "java-en-function-chronozoneddatetime-equals"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.equals"
signature: "boolean equals(Object obj)"
title: "ChronoZonedDateTime.equals"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.equals

```java
boolean equals(Object obj)
```

Checks if this date-time is equal to another date-time.
 

 The comparison is based on the offset date-time and the zone.
 To compare for the same instant on the time-line, use `compareTo`.
 Only objects of type `ChronoZonedDateTime` are compared, other types return false.

**参数**

- **obj** — the object to check, null returns false

**返回**

- true if this is equal to the other date-time
