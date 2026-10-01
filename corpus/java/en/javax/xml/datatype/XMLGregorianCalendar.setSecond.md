---
id: "java-en-function-xmlgregoriancalendar-setsecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setSecond"
signature: "public abstract void setSecond(int second)"
title: "XMLGregorianCalendar.setSecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setSecond

```java
public abstract void setSecond(int second)
```

Set seconds.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **second** — value constraints summarized in second field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `second` parameter is outside value constraints for the field as specified in date/time field mapping table.
