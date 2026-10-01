---
id: "java-en-function-math-nextdown"
language: "java"
lang: "en"
category: "function"
name: "Math.nextDown"
signature: "public static double nextDown(double d)"
title: "Math.nextDown"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.nextDown

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

 

 operation defined in IEEE 754.

**参数**

- **d** — starting floating-point value

**返回**

- The adjacent floating-point value closer to negative infinity.

> *Since 1.8*
