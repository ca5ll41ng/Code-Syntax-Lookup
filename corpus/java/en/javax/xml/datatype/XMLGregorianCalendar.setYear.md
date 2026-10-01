---
id: "java-en-function-xmlgregoriancalendar-setyear"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setYear"
signature: "public abstract void setYear(BigInteger year)"
title: "XMLGregorianCalendar.setYear"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setYear

```java
public abstract void setYear(BigInteger year)
```

Set low and high order component of XSD `dateTime` year field.

 

Unset this field by invoking the setter with a parameter value of `null`.

**参数**

- **year** — value constraints summarized in year field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if `year` parameter is outside value constraints for the field as specified in date/time field mapping table.
