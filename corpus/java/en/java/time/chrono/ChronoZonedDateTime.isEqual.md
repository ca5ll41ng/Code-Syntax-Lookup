---
id: "java-en-function-chronozoneddatetime-isequal"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.isEqual"
signature: "default boolean isEqual(ChronoZonedDateTime<?> other)"
title: "ChronoZonedDateTime.isEqual"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.isEqual

```java
default boolean isEqual(ChronoZonedDateTime<?> other)
```

Checks if the instant of this date-time is equal to that of the specified date-time.
 

 This method differs from the comparison in `compareTo` and `equals`
 in that it only compares the instant of the date-time. This is equivalent to using
 `dateTime1.toInstant().equals(dateTime2.toInstant());`.
 

 This default implementation performs the comparison based on the epoch-second
 and nano-of-second.

**参数**

- **other** — the other date-time to compare to, not null

**返回**

- true if the instant equals the instant of the specified date-time
