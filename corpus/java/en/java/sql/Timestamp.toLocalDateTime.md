---
id: "java-en-function-timestamp-tolocaldatetime"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.toLocalDateTime"
signature: "public LocalDateTime toLocalDateTime()"
title: "Timestamp.toLocalDateTime"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.toLocalDateTime

```java
public LocalDateTime toLocalDateTime()
```

Converts this `Timestamp` object to a `LocalDateTime`.
 

 The conversion creates a `LocalDateTime` that represents the
 same year, month, day of month, hours, minutes, seconds and nanos
 date-time value as this `Timestamp` in the local time zone.

**返回**

- a `LocalDateTime` object representing the same date-time value

> *Since 1.8*
