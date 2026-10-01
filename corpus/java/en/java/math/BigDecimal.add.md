---
id: "java-en-function-bigdecimal-add"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.add"
signature: "public BigDecimal add(BigDecimal augend)"
title: "BigDecimal.add"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.add

```java
public BigDecimal add(BigDecimal augend)
```

Returns a `BigDecimal` whose value is `(this +
 augend)`, and whose scale is `max(this.scale(),
 augend.scale())`.

**参数**

- **augend** — value to be added to this `BigDecimal`.

**返回**

- `this + augend`
