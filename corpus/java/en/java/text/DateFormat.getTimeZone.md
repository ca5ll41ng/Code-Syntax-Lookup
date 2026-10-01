---
id: "java-en-function-dateformat-gettimezone"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.getTimeZone"
signature: "public TimeZone getTimeZone()"
title: "DateFormat.getTimeZone"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.getTimeZone

```java
public TimeZone getTimeZone()
```

Gets the time zone.
 This method is equivalent to the following call.
 {@snippet lang=java :
 getCalendar().getTimeZone();
 }

**返回**

- the time zone associated with the calendar of DateFormat.
