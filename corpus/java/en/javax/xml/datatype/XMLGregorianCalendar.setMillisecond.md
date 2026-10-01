---
id: "java-en-function-xmlgregoriancalendar-setmillisecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setMillisecond"
signature: "public abstract void setMillisecond(int millisecond)"
title: "XMLGregorianCalendar.setMillisecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setMillisecond

```java
public abstract void setMillisecond(int millisecond)
```

Set milliseconds.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **millisecond** — value constraints summarized in second field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `millisecond` parameter is outside value constraints for the field as specified in date/time field mapping table.
