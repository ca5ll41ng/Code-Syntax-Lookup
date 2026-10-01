---
id: "java-en-function-chronozoneddatetime-isafter"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.isAfter"
signature: "default boolean isAfter(ChronoZonedDateTime<?> other)"
title: "ChronoZonedDateTime.isAfter"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.isAfter

```java
default boolean isAfter(ChronoZonedDateTime<?> other)
```

Checks if the instant of this date-time is after that of the specified date-time.
 

 This method differs from the comparison in `compareTo` in that it
 only compares the instant of the date-time. This is equivalent to using
 `dateTime1.toInstant().isAfter(dateTime2.toInstant());`.
 

 This default implementation performs the comparison based on the epoch-second
 and nano-of-second.

**参数**

- **other** — the other date-time to compare to, not null

**返回**

- true if this is after the specified date-time
