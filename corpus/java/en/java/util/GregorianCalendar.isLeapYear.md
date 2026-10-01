---
id: "java-en-function-gregoriancalendar-isleapyear"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.isLeapYear"
signature: "public boolean isLeapYear(int year)"
title: "GregorianCalendar.isLeapYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.isLeapYear

```java
public boolean isLeapYear(int year)
```

Determines if the given year is a leap year. Returns `true` if
 the given year is a leap year. To specify BC year numbers,
 `1 - year number` must be given. For example, year BC 4 is
 specified as -3.

**参数**

- **year** — the given year.

**返回**

- `true` if the given year is a leap year; `false` otherwise.
