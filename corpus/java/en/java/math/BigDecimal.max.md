---
id: "java-en-function-bigdecimal-max"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.max"
signature: "public BigDecimal max(BigDecimal val)"
title: "BigDecimal.max"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.max

```java
public BigDecimal max(BigDecimal val)
```

Returns the maximum of this `BigDecimal` and `val`.

**参数**

- **val** — value with which the maximum is to be computed.

**返回**

- the `BigDecimal` whose value is the greater of this `BigDecimal` and `val`.  If they are equal, as defined by the `compareTo(BigDecimal) compareTo` method, `this` is returned.

**参见**

- #compareTo(java.math.BigDecimal)
