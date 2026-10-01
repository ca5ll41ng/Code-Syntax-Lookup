---
id: "java-en-function-bigdecimal-unscaledvalue"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.unscaledValue"
signature: "public BigInteger unscaledValue()"
title: "BigDecimal.unscaledValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.unscaledValue

```java
public BigInteger unscaledValue()
```

Returns a `BigInteger` whose value is the unscaled
 value of this `BigDecimal`.  (Computes (this *
 10this.scale()).)

**返回**

- the unscaled value of this `BigDecimal`.

> *Since 1.2*
