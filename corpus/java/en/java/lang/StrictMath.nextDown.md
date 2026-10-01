---
id: "java-en-function-strictmath-nextdown"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.nextDown"
signature: "public static double nextDown(double d)"
title: "StrictMath.nextDown"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.nextDown

```java
public static double nextDown(double d)
```

Returns the floating-point value adjacent to `d` in
 the direction of negative infinity.  This method is
 semantically equivalent to `nextAfter(d,
 Double.NEGATIVE_INFINITY)`; however, a
 `nextDown` implementation may run faster than its
 equivalent `nextAfter` call.

 

Special Cases:
 
 
-  If the argument is NaN, the result is NaN.

 
-  If the argument is negative infinity, the result is
 negative infinity.

 
-  If the argument is zero, the result is
 `-Double.MIN_VALUE`

**参数**

- **d** — starting floating-point value

**返回**

- The adjacent floating-point value closer to negative infinity.

> *Since 1.8*
