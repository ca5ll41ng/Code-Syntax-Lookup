---
id: "java-en-function-gregoriancalendar-getgregorianchange"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.getGregorianChange"
signature: "public final Date getGregorianChange()"
title: "GregorianCalendar.getGregorianChange"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.getGregorianChange

```java
public final Date getGregorianChange()
```

Gets the Gregorian Calendar change date.  This is the point when the
 switch from Julian dates to Gregorian dates occurred. Default is
 October 15, 1582 (Gregorian). Previous to this, dates will be in the Julian
 calendar.

**返回**

- the Gregorian cutover date for this `GregorianCalendar` object.
