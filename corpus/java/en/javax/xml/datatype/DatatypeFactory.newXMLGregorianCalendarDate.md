---
id: "java-en-function-datatypefactory-newxmlgregoriancalendardate"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newXMLGregorianCalendarDate"
signature: "public XMLGregorianCalendar newXMLGregorianCalendarDate( final int year, final int month, final int day, final int timezone)"
title: "DatatypeFactory.newXMLGregorianCalendarDate"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newXMLGregorianCalendarDate

```java
public XMLGregorianCalendar newXMLGregorianCalendarDate( final int year, final int month, final int day, final int timezone)
```

Create a Java representation of XML Schema builtin datatype `date` or `g*`.

 

For example, an instance of `gYear` can be created invoking this factory
 with `month` and `day` parameters set to
 `FIELD_UNDEFINED`.

 

A `FIELD_UNDEFINED` value indicates that field is not set.

**参数**

- **year** — of `XMLGregorianCalendar` to be created.
- **month** — of `XMLGregorianCalendar` to be created.
- **day** — of `XMLGregorianCalendar` to be created.
- **timezone** — offset in minutes. `FIELD_UNDEFINED` indicates optional field is not set.

**返回**

- `XMLGregorianCalendar` created from parameter values.

**异常**

- **IllegalArgumentException** — If any individual parameter's value is outside the maximum value constraint for the field as determined by the Date/Time Data Mapping table in `XMLGregorianCalendar` or if the composite values constitute an invalid `XMLGregorianCalendar` instance as determined by `isValid`.

**参见**

- DatatypeConstants#FIELD_UNDEFINED
