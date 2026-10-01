---
id: "java-en-function-date-from"
language: "java"
lang: "en"
category: "function"
name: "Date.from"
signature: "public static Date from(Instant instant)"
title: "Date.from"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.from

```java
public static Date from(Instant instant)
```

Obtains an instance of `Date` from an `Instant` object.
 

 `Instant` uses a precision of nanoseconds, whereas `Date`
 uses a precision of milliseconds.  The conversion will truncate any
 excess precision information as though the amount in nanoseconds was
 subject to integer division by one million.
 

 `Instant` can store points on the time-line further in the future
 and further in the past than `Date`. In this scenario, this method
 will throw an exception.

**参数**

- **instant** — the instant to convert

**返回**

- a `Date` representing the same point on the time-line as the provided instant

**异常**

- **NullPointerException** — if `instant` is null.
- **IllegalArgumentException** — if the instant is too large to represent as a `Date`

> *Since 1.8*
