---
id: "java-en-function-dayofweek-of"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.of"
signature: "public static DayOfWeek of(int dayOfWeek)"
title: "DayOfWeek.of"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.of

```java
public static DayOfWeek of(int dayOfWeek)
```

Obtains an instance of `DayOfWeek` from an `int` value.
 

 `DayOfWeek` is an enum representing the 7 days of the week.
 This factory allows the enum to be obtained from the `int` value.
 The `int` value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).

**参数**

- **dayOfWeek** — the day-of-week to represent, from 1 (Monday) to 7 (Sunday)

**返回**

- the day-of-week singleton, not null

**异常**

- **DateTimeException** — if the day-of-week is invalid
