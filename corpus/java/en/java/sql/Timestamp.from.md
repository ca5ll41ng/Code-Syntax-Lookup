---
id: "java-en-function-timestamp-from"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.from"
signature: "public static Timestamp from(Instant instant)"
title: "Timestamp.from"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.from

```java
public static Timestamp from(Instant instant)
```

Obtains an instance of `Timestamp` from an `Instant` object.
 

 `Instant` can store points on the time-line further in the future
 and further in the past than `Date`. In this scenario, this method
 will throw an exception.

**参数**

- **instant** — the instant to convert

**返回**

- an `Timestamp` representing the same point on the time-line as the provided instant

**异常**

- **NullPointerException** — if `instant` is null.
- **IllegalArgumentException** — if the instant is too large to represent as a `Timestamp`

> *Since 1.8*
