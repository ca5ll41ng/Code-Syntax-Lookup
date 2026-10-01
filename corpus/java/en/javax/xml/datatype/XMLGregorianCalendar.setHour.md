---
id: "java-en-function-xmlgregoriancalendar-sethour"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setHour"
signature: "public abstract void setHour(int hour)"
title: "XMLGregorianCalendar.setHour"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setHour

```java
public abstract void setHour(int hour)
```

Set hours.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **hour** — value constraints summarized in hour field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `hour` parameter is outside value constraints for the field as specified in date/time field mapping table.
