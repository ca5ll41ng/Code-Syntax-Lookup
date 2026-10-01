---
id: "java-en-function-xmlgregoriancalendar-normalize"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.normalize"
signature: "public abstract XMLGregorianCalendar normalize()"
title: "XMLGregorianCalendar.normalize"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.normalize

```java
public abstract XMLGregorianCalendar normalize()
```

Normalize this instance to UTC.

 

2000-03-04T23:00:00+03:00 normalizes to 2000-03-04T20:00:00Z
 

Implements W3C XML Schema Part 2, Section 3.2.7.3 (A).

**返回**

- `this` `XMLGregorianCalendar` normalized to UTC.
