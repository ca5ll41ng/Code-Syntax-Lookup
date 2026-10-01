---
id: "java-en-function-valuerange-isintvalue"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.isIntValue"
signature: "public boolean isIntValue()"
title: "ValueRange.isIntValue"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.isIntValue

```java
public boolean isIntValue()
```

Checks if all values in the range fit in an `int`.
 

 This checks that all valid values are within the bounds of an `int`.
 

 For example, the ISO month-of-year has values from 1 to 12, which fits in an `int`.
 By comparison, ISO nano-of-day runs from 1 to 86,400,000,000,000 which does not fit in an `int`.
 

 This implementation uses `getMinimum` and `getMaximum`.

**返回**

- true if a valid value always fits in an `int`
