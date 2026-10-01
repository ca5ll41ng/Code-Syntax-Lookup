---
id: "java-en-function-javax-xml-datatype-duration"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.datatype.Duration"
title: "Duration"
directive: "type"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration

Immutable representation of a time span as defined in
 the W3C XML Schema 1.0 specification.

 

A Duration object represents a period of Gregorian time,
 which consists of six fields (years, months, days, hours,
 minutes, and seconds) plus a sign (+/-) field.

 

The first five fields have non-negative (>=0) integers or null
 (which represents that the field is not set),
 and the seconds field has a non-negative decimal or null.
 A negative sign indicates a negative duration.

 

This class provides a number of methods that make it easy
 to use for the duration datatype of XML Schema 1.0 with
 the errata.

 Order relationship
 

Duration objects only have partial order, where two values A and B
 maybe either:
 
  
- AB (A is longer than B)
  
- A==B   (A and B are of the same duration)
  
- A<>B (Comparison between A and B is indeterminate)
 

 

For example, 30 days cannot be meaningfully compared to one month.
 The `compare` method implements this
 relationship.

 

See the `isLongerThan` method for details about
 the order relationship among `Duration` objects.

 Operations over Duration
 

This class provides a set of basic arithmetic operations, such
 as addition, subtraction and multiplication.
 Because durations don't have total order, an operation could
 fail for some combinations of operations. For example, you cannot
 subtract 15 days from 1 month. See the javadoc of those methods
 for detailed conditions where this could happen.

 

Also, division of a duration by a number is not provided because
 the `Duration` class can only deal with finite precision
 decimal numbers. For example, one cannot represent 1 sec divided by 3.

 

However, you could substitute a division by 3 with multiplying
 by numbers such as 0.3 or 0.333.

 Range of allowed values
 

 Because some operations of `Duration` rely on `Calendar`
 even though `Duration` can hold very large or very small values,
 some of the methods may not work correctly on such `Duration`s.
 The impacted methods document their dependency on `Calendar`.

**参见**

- XMLGregorianCalendar#add(Duration)

> *Since 1.5*
