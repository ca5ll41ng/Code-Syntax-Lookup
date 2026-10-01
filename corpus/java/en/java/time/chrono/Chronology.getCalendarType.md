---
id: "java-en-function-chronology-getcalendartype"
language: "java"
lang: "en"
category: "function"
name: "Chronology.getCalendarType"
signature: "String getCalendarType()"
title: "Chronology.getCalendarType"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.getCalendarType

```java
String getCalendarType()
```

Gets the calendar type of the calendar system.
 

 The calendar type is an identifier defined by the CLDR and
 Unicode Locale Data Markup Language (LDML) specifications
 to uniquely identify a calendar.
 The `getCalendarType` is the concatenation of the CLDR calendar type
 and the variant, if applicable, is appended separated by "-".
 The calendar type is used to lookup the `Chronology` using `of`.

**返回**

- the calendar system type, null if the calendar is not defined by CLDR/LDML

**参见**

- #getId()
