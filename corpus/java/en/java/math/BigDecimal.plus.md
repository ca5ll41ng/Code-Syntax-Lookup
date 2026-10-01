---
id: "java-en-function-bigdecimal-plus"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.plus"
signature: "public BigDecimal plus()"
title: "BigDecimal.plus"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.plus

```java
public BigDecimal plus()
```

Returns a `BigDecimal` whose value is `(+this)`, and whose
 scale is `this.scale()`.

 

This method, which simply returns this `BigDecimal`
 is included for symmetry with the unary minus method `negate`.

**返回**

- `this`.

**参见**

- #negate()

> *Since 1.5*
