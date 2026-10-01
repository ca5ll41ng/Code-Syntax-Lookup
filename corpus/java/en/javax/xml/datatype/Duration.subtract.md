---
id: "java-en-function-duration-subtract"
language: "java"
lang: "en"
category: "function"
name: "Duration.subtract"
signature: "public Duration subtract(final Duration rhs)"
title: "Duration.subtract"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.subtract

```java
public Duration subtract(final Duration rhs)
```

Computes a new duration whose value is `this-rhs`.

 

For example:
 
```

 "1 day" - "-3 days" = "4 days"
 "1 year" - "1 day" = IllegalStateException
 "-(1 hour,50 minutes)" - "-20 minutes" = "-(1hours,30 minutes)"
 "15 hours" - "-3 days" = "3 days and 15 hours"
 "1 year" - "-1 day" = "1 year and 1 day"
 
```

 

Since there's no way to meaningfully subtract 1 day from 1 month,
 there are cases where the operation fails in `IllegalStateException`.

 

Formally the computation is defined as follows.
 First, we can assume that two `Duration`s are both positive
 without losing generality.  (i.e.,
 `(-X)-Y=-(X+Y)`, `X-(-Y)=X+Y`,
 `(-X)-(-Y)=-(X-Y)`)

 

Then two durations are subtracted field by field.
 If the sign of any non-zero field `F` is different from
 the sign of the most significant field,
 1 (if `F` is negative) or -1 (otherwise)
 will be borrowed from the next bigger unit of `F`.

 

This process is repeated until all the non-zero fields have
 the same sign.

 

If a borrow occurs in the days field (in other words, if
 the computation needs to borrow 1 or -1 month to compensate
 days), then the computation fails by throwing an
 `IllegalStateException`.

**参数**

- **rhs** — `Duration` to subtract from this `Duration`.

**返回**

- New `Duration` created from subtracting `rhs` from this `Duration`.

**异常**

- **IllegalStateException** — If two durations cannot be meaningfully subtracted. For example, subtracting one day from one month causes this exception.
- **NullPointerException** — If the rhs parameter is null.

**参见**

- #add(Duration)
