---
id: "java-en-function-dateformat-setcalendar"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.setCalendar"
signature: "public void setCalendar(Calendar newCalendar)"
title: "DateFormat.setCalendar"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.setCalendar

```java
public void setCalendar(Calendar newCalendar)
```

Set the calendar to be used by this date format.  Initially, the default
 calendar for the specified or default locale is used.

 

Any `java.util.TimeZone TimeZone` and `isLenient() leniency` values that have previously been set are
 overwritten by `newCalendar`'s values.

**参数**

- **newCalendar** — the new `Calendar` to be used by the date format
