---
id: "java-en-function-xmlgregoriancalendar-setfractionalsecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setFractionalSecond"
signature: "public abstract void setFractionalSecond(BigDecimal fractional)"
title: "XMLGregorianCalendar.setFractionalSecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setFractionalSecond

```java
public abstract void setFractionalSecond(BigDecimal fractional)
```

Set fractional seconds.

 

Unset this field by invoking the setter with a parameter value of `null`.

**参数**

- **fractional** — value constraints summarized in second field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `fractional` parameter is outside value constraints for the field as specified in date/time field mapping table.
