---
id: "java-en-function-xmlgregoriancalendar-setminute"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setMinute"
signature: "public abstract void setMinute(int minute)"
title: "XMLGregorianCalendar.setMinute"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setMinute

```java
public abstract void setMinute(int minute)
```

Set minutes.

 

Unset this field by invoking the setter with a parameter value of `FIELD_UNDEFINED`.

**参数**

- **minute** — value constraints summarized in minute field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `minute` parameter is outside value constraints for the field as specified in date/time field mapping table.
