---
id: "java-en-function-xmlgregoriancalendar-getmillisecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getMillisecond"
signature: "public int getMillisecond()"
title: "XMLGregorianCalendar.getMillisecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getMillisecond

```java
public int getMillisecond()
```

Returns the millisecond precision of `getFractionalSecond`.

 

This method represents a convenience accessor to infinite
 precision fractional second value returned by
 `getFractionalSecond`. The returned value is the rounded
 down to milliseconds value of
 `getFractionalSecond`. When `getFractionalSecond`
 returns `null`, this method must return
 `FIELD_UNDEFINED`.

 

Value constraints for this value are summarized in
 second field of date/time field mapping table.

**返回**

- The millisecond precision of this `XMLGregorianCalendar`.

**参见**

- #getFractionalSecond()
- #setTime(int, int, int)
