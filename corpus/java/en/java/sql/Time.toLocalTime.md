---
id: "java-en-function-time-tolocaltime"
language: "java"
lang: "en"
category: "function"
name: "Time.toLocalTime"
signature: "public LocalTime toLocalTime()"
title: "Time.toLocalTime"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Time.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Time.toLocalTime

```java
public LocalTime toLocalTime()
```

Converts this `Time` object to a `LocalTime`.
 

 The conversion creates a `LocalTime` that represents the same
 hour, minute, and second time value as this `Time`. The
 nanosecond `LocalTime` field will be set to zero.

**返回**

- a `LocalTime` object representing the same time value

> *Since 1.8*
