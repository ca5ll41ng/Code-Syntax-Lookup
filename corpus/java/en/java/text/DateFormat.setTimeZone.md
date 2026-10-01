---
id: "java-en-function-dateformat-settimezone"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.setTimeZone"
signature: "public void setTimeZone(TimeZone zone)"
title: "DateFormat.setTimeZone"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.setTimeZone

```java
public void setTimeZone(TimeZone zone)
```

Sets the time zone for the calendar of this `DateFormat` object.
 This method is equivalent to the following call.
 {@snippet lang=java :
 getCalendar().setTimeZone(zone);
 }

 

The `TimeZone` set by this method is overwritten by a
 `setCalendar(java.util.Calendar) setCalendar` call.

 

The `TimeZone` set by this method may be overwritten as
 a result of a call to the parse method.

**参数**

- **zone** — the given new time zone.
