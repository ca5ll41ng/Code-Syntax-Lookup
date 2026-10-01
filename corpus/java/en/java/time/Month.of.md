---
id: "java-en-function-month-of"
language: "java"
lang: "en"
category: "function"
name: "Month.of"
signature: "public static Month of(int month)"
title: "Month.of"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.of

```java
public static Month of(int month)
```

Obtains an instance of `Month` from an `int` value.
 

 `Month` is an enum representing the 12 months of the year.
 This factory allows the enum to be obtained from the `int` value.
 The `int` value follows the ISO-8601 standard, from 1 (January) to 12 (December).

**参数**

- **month** — the month-of-year to represent, from 1 (January) to 12 (December)

**返回**

- the month-of-year, not null

**异常**

- **DateTimeException** — if the month-of-year is invalid
