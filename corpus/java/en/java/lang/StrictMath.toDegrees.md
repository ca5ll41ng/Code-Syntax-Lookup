---
id: "java-en-function-strictmath-todegrees"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.toDegrees"
signature: "public static double toDegrees(double angrad)"
title: "StrictMath.toDegrees"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.toDegrees

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
