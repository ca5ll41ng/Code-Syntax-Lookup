---
id: "java-en-function-gregoriancalendar-setgregorianchange"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.setGregorianChange"
signature: "public void setGregorianChange(Date date)"
title: "GregorianCalendar.setGregorianChange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.setGregorianChange

```java
public void setGregorianChange(Date date)
```

Sets the `GregorianCalendar` change date. This is the point when the switch
 from Julian dates to Gregorian dates occurred. Default is October 15,
 1582 (Gregorian). Previous to this, dates will be in the Julian calendar.
 

 To obtain a pure Julian calendar, set the change date to
 `Date(Long.MAX_VALUE)`.  To obtain a pure Gregorian calendar,
 set the change date to `Date(Long.MIN_VALUE)`.

**参数**

- **date** — the given Gregorian cutover date.
