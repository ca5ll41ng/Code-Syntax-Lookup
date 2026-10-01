---
id: "java-en-function-chronolocaldate-toepochday"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDate.toEpochDay"
signature: "default long toEpochDay()"
title: "ChronoLocalDate.toEpochDay"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDate.toEpochDay

```java
default long toEpochDay()
```

Converts this date to the Epoch Day.
 

 The `EPOCH_DAY Epoch Day count` is a simple
 incrementing count of days where day 0 is 1970-01-01 (ISO).
 This definition is the same for all chronologies, enabling conversion.
 

 This default implementation queries the `EPOCH_DAY` field.

**返回**

- the Epoch Day equivalent to this date
