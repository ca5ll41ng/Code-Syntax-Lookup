---
id: "java-en-function-xmlgregoriancalendar-geteonandyear"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getEonAndYear"
signature: "public abstract BigInteger getEonAndYear()"
title: "XMLGregorianCalendar.getEonAndYear"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getEonAndYear

```java
public abstract BigInteger getEonAndYear()
```

Returns the XML Schema 1.0 dateTime datatype field for
 `year`.

 

Value constraints for this value are summarized in
 year field of date/time field mapping table.

**返回**

- sum of `eon` and `BigInteger.valueOf(year)` when both fields are defined. When only `year` is defined, return it. When both `eon` and `year` are not defined, return `null`.

**参见**

- #getEon()
- #getYear()
