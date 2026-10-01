---
id: "java-en-function-xmlgregoriancalendar-geteon"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getEon"
signature: "public abstract BigInteger getEon()"
title: "XMLGregorianCalendar.getEon"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getEon

```java
public abstract BigInteger getEon()
```

Returns the high order component for XML Schema 1.0 dateTime datatype field for
 `year`.
 `null` if this optional part of the year field is not defined.

 

Value constraints for this value are summarized in
 year field of date/time field mapping table.

**返回**

- The eon of this `XMLGregorianCalendar`. The value returned is an integer multiple of 10^9.

**参见**

- #getYear()
- #getEonAndYear()
