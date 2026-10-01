---
id: "java-en-function-xmlgregoriancalendar-settimezone"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setTimezone"
signature: "public abstract void setTimezone(int offset)"
title: "XMLGregorianCalendar.setTimezone"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setTimezone

```java
public abstract void setTimezone(int offset)
```

Set the number of minutes in the timezone offset.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **offset** — value constraints summarized in  timezone field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `offset` parameter is outside value constraints for the field as specified in date/time field mapping table.
