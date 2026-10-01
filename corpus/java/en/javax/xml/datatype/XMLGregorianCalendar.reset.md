---
id: "java-en-function-xmlgregoriancalendar-reset"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.reset"
signature: "public abstract void reset()"
title: "XMLGregorianCalendar.reset"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.reset

```java
public abstract void reset()
```

Reset this `XMLGregorianCalendar` to its original values.

 

`XMLGregorianCalendar` is reset to the same values as when it was created with
 `newXMLGregorianCalendar`,
 `newXMLGregorianCalendar`,
 `newXMLGregorianCalendar(
   BigInteger year,
   int month,
   int day,
   int hour,
   int minute,
   int second,
   BigDecimal fractionalSecond,
   int timezone)`,
 `newXMLGregorianCalendar(
   int year,
   int month,
   int day,
   int hour,
   int minute,
   int second,
   int millisecond,
   int timezone)`,
 `newXMLGregorianCalendar`,
 `newXMLGregorianCalendarDate(
   int year,
   int month,
   int day,
   int timezone)`,
 `newXMLGregorianCalendarTime(
   int hours,
   int minutes,
   int seconds,
   int timezone)`,
 `newXMLGregorianCalendarTime(
   int hours,
   int minutes,
   int seconds,
   BigDecimal fractionalSecond,
   int timezone)` or
 `newXMLGregorianCalendarTime(
   int hours,
   int minutes,
   int seconds,
   int milliseconds,
   int timezone)`.

 

`reset()` is designed to allow the reuse of existing `XMLGregorianCalendar`s
 thus saving resources associated with the creation of new `XMLGregorianCalendar`s.
