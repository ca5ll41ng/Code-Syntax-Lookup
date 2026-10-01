---
id: "java-en-function-xmlgregoriancalendar-setday"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setDay"
signature: "public abstract void setDay(int day)"
title: "XMLGregorianCalendar.setDay"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setDay

```java
public abstract void setDay(int day)
```

Set days in month.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **day** — value constraints summarized in day field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `day` parameter is outside value constraints for the field as specified in date/time field mapping table.
