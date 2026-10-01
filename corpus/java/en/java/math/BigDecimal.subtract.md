---
id: "java-en-function-bigdecimal-subtract"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.subtract"
signature: "public BigDecimal subtract(BigDecimal subtrahend)"
title: "BigDecimal.subtract"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.subtract

```java
public BigDecimal subtract(BigDecimal subtrahend)
```

Returns a `BigDecimal` whose value is `(this -
 subtrahend)`, and whose scale is `max(this.scale(),
 subtrahend.scale())`.

**参数**

- **subtrahend** — value to be subtracted from this `BigDecimal`.

**返回**

- `this - subtrahend`
