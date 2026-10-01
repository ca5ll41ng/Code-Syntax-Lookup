---
id: "java-en-function-bigdecimal-multiply"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.multiply"
signature: "public BigDecimal multiply(BigDecimal multiplicand)"
title: "BigDecimal.multiply"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.multiply

```java
public BigDecimal multiply(BigDecimal multiplicand)
```

Returns a `BigDecimal` whose value is (this &times;
 multiplicand), and whose scale is `(this.scale() +
 multiplicand.scale())`.

**参数**

- **multiplicand** — value to be multiplied by this `BigDecimal`.

**返回**

- `this * multiplicand`
