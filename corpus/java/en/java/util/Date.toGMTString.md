---
id: "java-en-function-date-togmtstring"
language: "java"
lang: "en"
category: "function"
name: "Date.toGMTString"
signature: "public String toGMTString()"
title: "Date.toGMTString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.toGMTString

```java
public String toGMTString()
```

Creates a string representation of this `Date` object of
 the form:
 
```

 d mon yyyy hh:mm:ss GMT
```

 where:
 
- d is the day of the month (`1` through `31`),
     as one or two decimal digits.
 
- mon is the month (`Jan, Feb, Mar, Apr, May, Jun, Jul,
     Aug, Sep, Oct, Nov, Dec`).
 
- yyyy is the year, as four decimal digits.
 
- hh is the hour of the day (`00` through `23`),
     as two decimal digits.
 
- mm is the minute within the hour (`00` through
     `59`), as two decimal digits.
 
- ss is the second within the minute (`00` through
     `61`), as two decimal digits.
 
- GMT is exactly the ASCII letters "`GMT`" to indicate
     Greenwich Mean Time.
 

 The result does not depend on the local time zone.

**返回**

- a string representation of this date, using the Internet GMT conventions.

**参见**

- java.text.DateFormat
- java.util.Date#toString()
- java.util.Date#toLocaleString()

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `DateFormat.format(Date date)`, using a GMT `TimeZone`.
