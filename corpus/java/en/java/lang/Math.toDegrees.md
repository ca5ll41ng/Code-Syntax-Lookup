---
id: "java-en-function-math-todegrees"
language: "java"
lang: "en"
category: "function"
name: "Math.toDegrees"
signature: "public static double toDegrees(double angrad)"
title: "Math.toDegrees"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.toDegrees

```java
public static double toDegrees(double angrad)
```

Converts an angle measured in radians to an approximately
 equivalent angle measured in degrees.  The conversion from
 radians to degrees is generally inexact; users should
 not expect `cos(toRadians(90.0))` to exactly
 equal `0.0`.

**参数**

- **angrad** — an angle, in radians

**返回**

- the measurement of the angle `angrad` in degrees.

> *Since 1.2*
