---
id: "java-en-function-gregoriancalendar-tozoneddatetime"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.toZonedDateTime"
signature: "public ZonedDateTime toZonedDateTime()"
title: "GregorianCalendar.toZonedDateTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.toZonedDateTime

```java
public ZonedDateTime toZonedDateTime()
```

Converts this object to a `ZonedDateTime` that represents
 the same point on the time-line as this `GregorianCalendar`.
 

 Since this object supports a Julian-Gregorian cutover date and
 `ZonedDateTime` does not, it is possible that the resulting year,
 month and day will have different values.  The result will represent the
 correct date in the ISO calendar system, which will also be the same value
 for Modified Julian Days.

**返回**

- a zoned date-time representing the same point on the time-line as this gregorian calendar

> *Since 1.8*
