---
id: "java-en-function-duration-compare"
language: "java"
lang: "en"
category: "function"
name: "Duration.compare"
signature: "public abstract int compare(final Duration duration)"
title: "Duration.compare"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.compare

```java
public abstract int compare(final Duration duration)
```

Partial order relation comparison with this `Duration` instance.

 

Comparison result must be in accordance with
 W3C XML Schema 1.0 Part 2, Section 3.2.7.6.2,
 Order relation on duration.

 

Return:
 
   
- `LESSER` if this `Duration` is shorter than `duration` parameter
   
- `EQUAL` if this `Duration` is equal to `duration` parameter
   
- `GREATER` if this `Duration` is longer than `duration` parameter
   
- `INDETERMINATE` if a conclusive partial order relation cannot be determined

**参数**

- **duration** — to compare

**返回**

- the relationship between `this Duration` and `duration` parameter as `LESSER`, `EQUAL`, `GREATER` or `INDETERMINATE`.

**异常**

- **UnsupportedOperationException** — If the underlying implementation cannot reasonably process the request, e.g. W3C XML Schema allows for arbitrarily large/small/precise values, the request may be beyond the implementations capability.
- **NullPointerException** — if `duration` is `null`.

**参见**

- #isShorterThan(Duration)
- #isLongerThan(Duration)
