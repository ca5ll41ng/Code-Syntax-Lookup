---
id: "java-en-function-minguochronology-getcalendartype"
language: "java"
lang: "en"
category: "function"
name: "MinguoChronology.getCalendarType"
signature: "public String getCalendarType()"
title: "MinguoChronology.getCalendarType"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/MinguoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MinguoChronology.getCalendarType

```java
public String getCalendarType()
```

Gets the calendar type of the underlying calendar system - 'roc'.
 

 The calendar type is an identifier defined by the
 Unicode Locale Data Markup Language (LDML) specification.
 It can be used to lookup the `Chronology` using `of`.
 It can also be used as part of a locale, accessible via
 `getUnicodeLocaleType` with the key 'ca'.

**返回**

- the calendar system type - 'roc'

**参见**

- #getId()
