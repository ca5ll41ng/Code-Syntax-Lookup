---
id: "java-en-function-strictmath-copysign"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.copySign"
signature: "public static double copySign(double magnitude, double sign)"
title: "StrictMath.copySign"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.copySign

```java
public static double copySign(double magnitude, double sign)
```

Returns the first floating-point argument with the sign of the
 second floating-point argument.  For this method, a NaN
 `sign` argument is always treated as if it were
 positive.

**参数**

- **magnitude** — the parameter providing the magnitude of the result
- **sign** — the parameter providing the sign of the result

**返回**

- a value with the magnitude of `magnitude` and the sign of `sign`.

> *Since 1.6*
