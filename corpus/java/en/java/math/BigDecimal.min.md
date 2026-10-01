---
id: "java-en-function-bigdecimal-min"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.min"
signature: "public BigDecimal min(BigDecimal val)"
title: "BigDecimal.min"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.min

```java
public BigDecimal min(BigDecimal val)
```

Returns the minimum of this `BigDecimal` and
 `val`.

**参数**

- **val** — value with which the minimum is to be computed.

**返回**

- the `BigDecimal` whose value is the lesser of this `BigDecimal` and `val`.  If they are equal, as defined by the `compareTo(BigDecimal) compareTo` method, `this` is returned.

**参见**

- #compareTo(java.math.BigDecimal)
