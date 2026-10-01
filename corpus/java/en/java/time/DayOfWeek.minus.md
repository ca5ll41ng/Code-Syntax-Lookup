---
id: "java-en-function-dayofweek-minus"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.minus"
signature: "public DayOfWeek minus(long days)"
title: "DayOfWeek.minus"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.minus

```java
public DayOfWeek minus(long days)
```

Returns the day-of-week that is the specified number of days before this one.
 

 The calculation rolls around the start of the week from Monday to Sunday.
 The specified period may be negative.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **days** — the days to subtract, positive or negative

**返回**

- the resulting day-of-week, not null
