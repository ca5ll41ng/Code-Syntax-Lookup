---
id: "java-en-function-valuerange-isfixed"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.isFixed"
signature: "public boolean isFixed()"
title: "ValueRange.isFixed"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.isFixed

```java
public boolean isFixed()
```

Is the value range fixed and fully known.
 

 For example, the ISO day-of-month runs from 1 to between 28 and 31.
 Since there is uncertainty about the maximum value, the range is not fixed.
 However, for the month of January, the range is always 1 to 31, thus it is fixed.

**返回**

- true if the set of values is fixed
