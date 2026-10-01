---
id: "java-en-function-duration-addto"
language: "java"
lang: "en"
category: "function"
name: "Duration.addTo"
signature: "public abstract void addTo(Calendar calendar)"
title: "Duration.addTo"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.addTo

```java
public abstract void addTo(Calendar calendar)
```

Adds this duration to a `Calendar` object.

 

 Calls `add` in the
 order of YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS, and MILLISECONDS
 if those fields are present. Because the `Calendar` class
 uses int to hold values, there are cases where this method
 won't work correctly (for example if values of fields
 exceed the range of int.)

 

 Also, since this duration class is a Gregorian duration, this
 method will not work correctly if the given `Calendar`
 object is based on some other calendar systems.

 

 Any fractional parts of this `Duration` object
 beyond milliseconds will be simply ignored. For example, if
 this duration is "P1.23456S", then 1 is added to SECONDS,
 234 is added to MILLISECONDS, and the rest will be unused.

 

 Note that because `add` is using
 `int`, `Duration` with values beyond the
 range of `int` in its fields
 will cause overflow/underflow to the given `Calendar`.
 `add` provides the same
 basic operation as this method while avoiding
 the overflow/underflow issues.

**参数**

- **calendar** — A calendar object whose value will be modified.

**异常**

- **NullPointerException** — if the calendar parameter is null.
