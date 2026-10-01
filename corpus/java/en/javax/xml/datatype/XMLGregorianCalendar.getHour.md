---
id: "java-en-function-xmlgregoriancalendar-gethour"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getHour"
signature: "public abstract int getHour()"
title: "XMLGregorianCalendar.getHour"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getHour

```java
public abstract int getHour()
```

Returns the hour of day or
 `FIELD_UNDEFINED` if this field is not defined.

 

Value constraints for this value are summarized in
 hour field of date/time field mapping table.

**返回**

- The hour of day of this `XMLGregorianCalendar`, from 0 to 23.

**参见**

- #setTime(int, int, int)
