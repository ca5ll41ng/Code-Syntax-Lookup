---
id: "java-en-function-hijrahchronology-getcalendartype"
language: "java"
lang: "en"
category: "function"
name: "HijrahChronology.getCalendarType"
signature: "public String getCalendarType()"
title: "HijrahChronology.getCalendarType"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahChronology.getCalendarType

```java
public String getCalendarType()
```

Gets the calendar type of the Islamic calendar.
 

 The calendar type is an identifier defined by the
 Unicode Locale Data Markup Language (LDML) specification.
 It can be used to lookup the `Chronology` using `of`.

**返回**

- the calendar system type; non-null if the calendar has a standard type, otherwise null

**参见**

- #getId()
