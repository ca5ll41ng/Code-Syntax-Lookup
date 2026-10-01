---
id: "java-en-function-xmlgregoriancalendar-getminute"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getMinute"
signature: "public abstract int getMinute()"
title: "XMLGregorianCalendar.getMinute"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getMinute

```java
public abstract int getMinute()
```

Returns the minute of hour or
 `FIELD_UNDEFINED` if this field is not defined.

 

Value constraints for this value are summarized in
 minute field of date/time field mapping table.

**返回**

- The minute of hour of this `XMLGregorianCalendar`, from 0 to 59.

**参见**

- #setTime(int, int, int)
