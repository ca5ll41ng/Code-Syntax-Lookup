---
id: "java-en-function-xmlgregoriancalendar-getfractionalsecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getFractionalSecond"
signature: "public abstract BigDecimal getFractionalSecond()"
title: "XMLGregorianCalendar.getFractionalSecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getFractionalSecond

```java
public abstract BigDecimal getFractionalSecond()
```

Returns fractional seconds.

 

`null` is returned when this optional field is not defined.

 

Value constraints are detailed in
 second field of date/time field mapping table.

 

This optional field can only have a defined value when the
 xs:dateTime second field, represented by `getSecond`,
 does not return `FIELD_UNDEFINED`.

**返回**

- Fractional seconds of this `XMLGregorianCalendar`.

**参见**

- #getSecond()
- #setTime(int, int, int, BigDecimal)
