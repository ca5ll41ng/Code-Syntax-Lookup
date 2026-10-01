---
id: "java-en-function-datatypefactory-newxmlgregoriancalendartime"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newXMLGregorianCalendarTime"
signature: "public XMLGregorianCalendar newXMLGregorianCalendarTime( final int hours, final int minutes, final int seconds, final int timezone)"
title: "DatatypeFactory.newXMLGregorianCalendarTime"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newXMLGregorianCalendarTime

```java
public XMLGregorianCalendar newXMLGregorianCalendarTime( final int hours, final int minutes, final int seconds, final int timezone)
```

Create a Java instance of XML Schema builtin datatype `time`.

 

A `FIELD_UNDEFINED` value indicates that field is not set.

**参数**

- **hours** — number of hours
- **minutes** — number of minutes
- **seconds** — number of seconds
- **timezone** — offset in minutes. `FIELD_UNDEFINED` indicates optional field is not set.

**返回**

- `XMLGregorianCalendar` created from parameter values.

**异常**

- **IllegalArgumentException** — If any individual parameter's value is outside the maximum value constraint for the field as determined by the Date/Time Data Mapping table in `XMLGregorianCalendar` or if the composite values constitute an invalid `XMLGregorianCalendar` instance as determined by `isValid`.

**参见**

- DatatypeConstants#FIELD_UNDEFINED
