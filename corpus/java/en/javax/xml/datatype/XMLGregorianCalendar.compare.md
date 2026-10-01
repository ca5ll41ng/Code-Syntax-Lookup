---
id: "java-en-function-xmlgregoriancalendar-compare"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.compare"
signature: "public abstract int compare(XMLGregorianCalendar xmlGregorianCalendar)"
title: "XMLGregorianCalendar.compare"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.compare

```java
public abstract int compare(XMLGregorianCalendar xmlGregorianCalendar)
```

Compare two instances of W3C XML Schema 1.0 date/time datatypes
 according to partial order relation defined in
 W3C XML Schema 1.0 Part 2, Section 3.2.7.3,
 Order relation on dateTime.

 

`xsd:dateTime` datatype field mapping to accessors of
 this class are defined in
 date/time field mapping table.

**参数**

- **xmlGregorianCalendar** — Instance of `XMLGregorianCalendar` to compare

**返回**

- The relationship between `this` `XMLGregorianCalendar` and the specified `xmlGregorianCalendar` as `LESSER`, `EQUAL`, `GREATER` or `INDETERMINATE`.

**异常**

- **NullPointerException** — if `xmlGregorianCalendar` is null.
