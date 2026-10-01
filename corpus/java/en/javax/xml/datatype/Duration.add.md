---
id: "java-en-function-duration-add"
language: "java"
lang: "en"
category: "function"
name: "Duration.add"
signature: "public abstract Duration add(final Duration rhs)"
title: "Duration.add"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.add

```java
public abstract Duration add(final Duration rhs)
```

Computes a new duration whose value is `this+rhs`.

 

For example,
 
```

 "1 day" + "-3 days" = "-2 days"
 "1 year" + "1 day" = "1 year and 1 day"
 "-(1 hour,50 minutes)" + "-20 minutes" = "-(1 hours,70 minutes)"
 "15 hours" + "-3 days" = "-(2 days,9 hours)"
 "1 year" + "-1 day" = IllegalStateException
 
```

 

Since there's no way to meaningfully subtract 1 day from 1 month,
 there are cases where the operation fails in
 `IllegalStateException`.

 

 Formally, the computation is defined as follows.
 

 Firstly, we can assume that two `Duration`s to be added
 are both positive without losing generality (i.e.,
 `(-X)+Y=Y-X`, `X+(-Y)=X-Y`,
 `(-X)+(-Y)=-(X+Y)`)

 

 Addition of two positive `Duration`s are simply defined as
 field by field addition where missing fields are treated as 0.
 

 A field of the resulting `Duration` will be unset if and
 only if respective fields of two input `Duration`s are unset.
 

 Note that `lhs.add(rhs)` will be always successful if
 `lhs.signum()*rhs.signum()!=-1` or both of them are
 normalized.

**参数**

- **rhs** — `Duration` to add to this `Duration`

**返回**

- non-null valid Duration object.

**异常**

- **NullPointerException** — If the rhs parameter is null.
- **IllegalStateException** — If two durations cannot be meaningfully added. For example, adding negative one day to one month causes this exception.

**参见**

- #subtract(Duration)
