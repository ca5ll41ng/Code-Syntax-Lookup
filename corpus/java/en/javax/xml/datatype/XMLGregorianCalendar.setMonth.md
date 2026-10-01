---
id: "java-en-function-xmlgregoriancalendar-setmonth"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setMonth"
signature: "public abstract void setMonth(int month)"
title: "XMLGregorianCalendar.setMonth"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setMonth

```java
public abstract void setMonth(int month)
```

Set month.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **month** — value constraints summarized in month field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `month` parameter is outside value constraints for the field as specified in date/time field mapping table.
