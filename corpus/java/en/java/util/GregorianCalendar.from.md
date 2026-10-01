---
id: "java-en-function-gregoriancalendar-from"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.from"
signature: "public static GregorianCalendar from(ZonedDateTime zdt)"
title: "GregorianCalendar.from"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.from

```java
public static GregorianCalendar from(ZonedDateTime zdt)
```

Obtains an instance of `GregorianCalendar` with the default locale
 from a `ZonedDateTime` object.
 

 Since `ZonedDateTime` does not support a Julian-Gregorian cutover
 date and uses ISO calendar system, the return GregorianCalendar is a pure
 Gregorian calendar and uses ISO 8601 standard for week definitions,
 which has `MONDAY` as the `getFirstDayOfWeek()
 FirstDayOfWeek` and `4` as the value of the
 `getMinimalDaysInFirstWeek() MinimalDaysInFirstWeek`.
 

 `ZoneDateTime` can store points on the time-line further in the
 future and further in the past than `GregorianCalendar`. In this
 scenario, this method will throw an `IllegalArgumentException`
 exception.

**参数**

- **zdt** — the zoned date-time object to convert

**返回**

- the gregorian calendar representing the same point on the time-line as the zoned date-time provided

**异常**

- **NullPointerException** — if `zdt` is null
- **IllegalArgumentException** — if the zoned date-time is too large to represent as a `GregorianCalendar`

> *Since 1.8*
