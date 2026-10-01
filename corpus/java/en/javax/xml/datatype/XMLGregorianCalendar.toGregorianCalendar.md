---
id: "java-en-function-xmlgregoriancalendar-togregoriancalendar"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.toGregorianCalendar"
signature: "public abstract GregorianCalendar toGregorianCalendar()"
title: "XMLGregorianCalendar.toGregorianCalendar"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.toGregorianCalendar

```java
public abstract GregorianCalendar toGregorianCalendar()
```

Convert this `XMLGregorianCalendar` to a `GregorianCalendar`.

 

When `this` instance has an undefined field, this
 conversion relies on the `java.util.GregorianCalendar` default
 for its corresponding field. A notable difference between
 XML Schema 1.0 date/time datatypes and `java.util.GregorianCalendar`
 is that Timezone value is optional for date/time datatypes and it is
 a required field for `java.util.GregorianCalendar`. See javadoc
 for `java.util.TimeZone.getDefault()` on how the default
 is determined. To explicitly specify the `TimeZone`
 instance, see
 `toGregorianCalendar`.

 
   Field by Field Conversion from this class to
          `java.util.GregorianCalendar`
   
     
        `java.util.GregorianCalendar` field
        `javax.xml.datatype.XMLGregorianCalendar` field
     
   
   
     
       `ERA`
       `getEonAndYear``.signum() < 0 ? GregorianCalendar.BC : GregorianCalendar.AD`
     
     
       `YEAR`
       `getEonAndYear``.abs().intValue()`*
     
     
       `MONTH`
       `getMonth` - `JANUARY` + `JANUARY`
     
     
       `DAY_OF_MONTH`
       `getDay`
     
     
       `HOUR_OF_DAY`
       `getHour`
     
     
       `MINUTE`
       `getMinute`
     
     
       `SECOND`
       `getSecond`
     
     
       `MILLISECOND`
       get millisecond order from `getFractionalSecond`* 
     
     
       `GregorianCalendar.setTimeZone(TimeZone)`
       `getTimezone` formatted into Custom timezone id
     
   
 
 * designates possible loss of precision during the conversion due
 to source datatype having higher precision than target datatype.

 

To ensure consistency in conversion implementations, the new
 `GregorianCalendar` should be instantiated in following
 manner.
 
   
- Using `timeZone` value as defined above, create a new
 `java.util.GregorianCalendar(timeZone,Locale.getDefault())`.
   
   
- Initialize all GregorianCalendar fields by calling `clear`.
   
- Obtain a pure Gregorian Calendar by invoking
   `GregorianCalendar.setGregorianChange(
   new Date(Long.MIN_VALUE))`.
   
- Its fields ERA, YEAR, MONTH, DAY_OF_MONTH, HOUR_OF_DAY,
       MINUTE, SECOND and MILLISECOND are set using the method
       `Calendar.set(int,int)`

**返回**

- An instance of `java.util.GregorianCalendar`.

**参见**

- #toGregorianCalendar(java.util.TimeZone, java.util.Locale, XMLGregorianCalendar)
