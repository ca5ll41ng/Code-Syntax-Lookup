---
id: "java-en-function-javax-xml-datatype-xmlgregoriancalendar"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.datatype.XMLGregorianCalendar"
title: "XMLGregorianCalendar"
directive: "type"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar

Representation for W3C XML Schema 1.0 date/time datatypes.
 Specifically, these date/time datatypes are
 `DATETIME`,
 `TIME`,
 `DATE`,
 `GYEARMONTH`,
 `GMONTHDAY`,
 `GYEAR`,
 `GMONTH`, and
 `GDAY`
 defined in the XML Namespace
 `"http://www.w3.org/2001/XMLSchema"`.
 These datatypes are normatively defined in
 W3C XML Schema 1.0 Part 2, Section 3.2.7-14.

 

The table below defines the mapping between XML Schema 1.0
 date/time datatype fields and this class' fields. It also summarizes
 the value constraints for the date and time fields defined in
 W3C XML Schema 1.0 Part 2, Appendix D,
 ISO 8601 Date and Time Formats.

 
 
   Date/Time Datatype Field Mapping Between XML Schema 1.0 and Java Representation
   
     
       XML Schema 1.0

           datatype

            field
       Related
XMLGregorianCalendar
Accessor(s)
       Value Range
     
   
   
     
       year
        `getYear` + `getEon` or

            `getEonAndYear`
       
        `getYear()` is a value between -(10^9-1) to (10^9)-1
            or `FIELD_UNDEFINED`.

            `getEon` is high order year value in billion of years.

            `getEon()` has values greater than or equal to (10^9) or less than or equal to -(10^9).
            A value of null indicates field is undefined.

            Given that XML Schema 1.0 errata states that the year zero
            will be a valid lexical value in a future version of XML Schema,
            this class allows the year field to be set to zero. Otherwise,
            the year field value is handled exactly as described
            in the errata and [ISO-8601-1988]. Note that W3C XML Schema 1.0
            validation does not allow for the year field to have a value of zero.
            
     
     
       month
        `getMonth` 
        1 to 12 or `FIELD_UNDEFINED` 
     
     
       day
        `getDay` 
        Independent of month, max range is 1 to 31 or `FIELD_UNDEFINED`.

            The normative value constraint stated relative to month
            field's value is in W3C XML Schema 1.0 Part 2, Appendix D.
       
     
     
       hour
       `getHour`
       
         0 to 23 or `FIELD_UNDEFINED`.
         An hour value of 24 is allowed to be set in the lexical space provided the minute and second
         field values are zero. However, an hour value of 24 is not allowed in value space and will be
         transformed to represent the value of the first instance of the following day as per
         
         XML Schema Part 2: Datatypes Second Edition, 3.2 Primitive datatypes.
       
     
     
       minute
        `getMinute` 
        0 to 59 or `FIELD_UNDEFINED` 
     
     
       second
       
         `getSecond` + `getMillisecond`/1000 or

         `getSecond` + `getFractionalSecond`
       
       
         `getSecond` from 0 to 60 or `FIELD_UNDEFINED`.

         (Note: 60 only allowable for leap second.)

         `getFractionalSecond` allows for infinite precision over the range from 0.0 to 1.0 when
         the `getSecond` is defined.

         `FractionalSecond` is optional and has a value of `null` when it is undefined.

            `getMillisecond` is the convenience
            millisecond precision of value of `getFractionalSecond`.
       
     
     
       timezone
        `getTimezone` 
        Number of minutes or `FIELD_UNDEFINED`.
         Value range from -14 hours (-14 * 60 minutes) to 14 hours (14 * 60 minutes).
       
     
   
  

 

All maximum value space constraints listed for the fields in the table
 above are checked by factory methods, `DatatypeFactory`,
 setter methods and parse methods of
 this class. `IllegalArgumentException` is thrown when a
 parameter's value is outside the value constraint for the field or
 if the composite
 values constitute an invalid XMLGregorianCalendar instance (for example, if
 the 31st of June is specified).

 

The following operations are defined for this class:
 
   
- accessors/mutators for independent date/time fields
   
- conversion between this class and W3C XML Schema 1.0 lexical representation,
     `toString`, `newXMLGregorianCalendar`
   
- conversion between this class and `GregorianCalendar`,
     `toGregorianCalendar`,
     `DatatypeFactory`
   
- partial order relation comparator method, `compare`
   
- `equals` defined relative to `compare`.
   
- addition operation with `Duration`
      instance as defined in 
      W3C XML Schema 1.0 Part 2, Appendix E, Adding durations to dateTimes.

**参见**

- Duration
- DatatypeFactory

> *Since 1.5*
