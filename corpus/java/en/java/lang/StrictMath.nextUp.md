---
id: "java-en-function-strictmath-nextup"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.nextUp"
signature: "public static double nextUp(double d)"
title: "StrictMath.nextUp"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.nextUp

```java
public static double nextUp(double d)
```

Returns the floating-point value adjacent to `d` in
 the direction of positive infinity.  This method is
 semantically equivalent to `nextAfter(d,
 Double.POSITIVE_INFINITY)`; however, a `nextUp`
 implementation may run faster than its equivalent
 `nextAfter` call.

 

Special Cases:
 
 
-  If the argument is NaN, the result is NaN.

 
-  If the argument is positive infinity, the result is
 positive infinity.

 
-  If the argument is zero, the result is
 `MIN_VALUE`

**参数**

- **d** — starting floating-point value

**返回**

- The adjacent floating-point value closer to positive infinity.

> *Since 1.6*
