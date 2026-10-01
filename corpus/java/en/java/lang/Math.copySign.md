---
id: "java-en-function-math-copysign"
language: "java"
lang: "en"
category: "function"
name: "Math.copySign"
signature: "public static double copySign(double magnitude, double sign)"
title: "Math.copySign"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.copySign

```java
public static double copySign(double magnitude, double sign)
```

Returns the first floating-point argument with the sign of the
 second floating-point argument.  Note that unlike the `copySign(double, double) StrictMath.copySign`
 method, this method does not require NaN `sign`
 arguments to be treated as positive values; implementations are
 permitted to treat some NaN arguments as positive and other NaN
 arguments as negative to allow greater performance.

 This method corresponds to the copySign operation defined in
 IEEE 754.

**参数**

- **magnitude** — the parameter providing the magnitude of the result
- **sign** — the parameter providing the sign of the result

**返回**

- a value with the magnitude of `magnitude` and the sign of `sign`.

> *Since 1.6*
