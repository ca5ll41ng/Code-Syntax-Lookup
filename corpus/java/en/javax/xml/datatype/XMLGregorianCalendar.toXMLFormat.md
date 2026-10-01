---
id: "java-en-function-xmlgregoriancalendar-toxmlformat"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.toXMLFormat"
signature: "public abstract String toXMLFormat()"
title: "XMLGregorianCalendar.toXMLFormat"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.toXMLFormat

```java
public abstract String toXMLFormat()
```

Return the lexical representation of `this` instance.
 The format is specified in
 XML Schema 1.0 Part 2, Section 3.2.[7-14].1,
 Lexical Representation".

 

Specific target lexical representation format is determined by
 `getXMLSchemaType`.

**返回**

- XML, as `String`, representation of this `XMLGregorianCalendar`

**异常**

- **IllegalStateException** — if the combination of set fields does not match one of the eight defined XML Schema builtin date/time datatypes.
