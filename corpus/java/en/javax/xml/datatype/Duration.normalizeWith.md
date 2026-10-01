---
id: "java-en-function-duration-normalizewith"
language: "java"
lang: "en"
category: "function"
name: "Duration.normalizeWith"
signature: "public abstract Duration normalizeWith(final Calendar startTimeInstant)"
title: "Duration.normalizeWith"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.normalizeWith

```java
public abstract Duration normalizeWith(final Calendar startTimeInstant)
```

Converts the years and months fields into the days field
 by using a specific time instant as the reference point.

 

For example, duration of one month normalizes to 31 days
 given the start time instance "July 8th 2003, 17:40:32".

 

Formally, the computation is done as follows:
 
  
- the given Calendar object is cloned
  
- the years, months and days fields will be added to the `Calendar` object
      by using the `add` method
  
- the difference between the two Calendars in computed in milliseconds and converted to days,
     if a remainder occurs due to Daylight Savings Time, it is discarded
  
- the computed days, along with the hours, minutes and seconds
      fields of this duration object is used to construct a new
      Duration object.
 

 

Note that since the Calendar class uses `int` to
 hold the value of year and month, this method may produce
 an unexpected result if this duration object holds
 a very large value in the years or months fields.

**参数**

- **startTimeInstant** — `Calendar` reference point.

**返回**

- `Duration` of years and months of this `Duration` as days.

**异常**

- **NullPointerException** — If the startTimeInstant parameter is null.
