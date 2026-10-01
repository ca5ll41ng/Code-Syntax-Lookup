---
id: "java-en-function-dayofweek-plus"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.plus"
signature: "public DayOfWeek plus(long days)"
title: "DayOfWeek.plus"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.plus

```java
public DayOfWeek plus(long days)
```

Returns the day-of-week that is the specified number of days after this one.
 

 The calculation rolls around the end of the week from Sunday to Monday.
 The specified period may be negative.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **days** — the days to add, positive or negative

**返回**

- the resulting day-of-week, not null
