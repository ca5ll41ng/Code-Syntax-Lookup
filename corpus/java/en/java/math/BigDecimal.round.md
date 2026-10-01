---
id: "java-en-function-bigdecimal-round"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.round"
signature: "public BigDecimal round(MathContext mc)"
title: "BigDecimal.round"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.round

```java
public BigDecimal round(MathContext mc)
```

Returns a `BigDecimal` rounded according to the
 `MathContext` settings.  If the precision setting is 0 then
 no rounding takes place.

 

The effect of this method is identical to that of the
 `plus` method.

**参数**

- **mc** — the context to use.

**返回**

- a `BigDecimal` rounded according to the `MathContext` settings.

**参见**

- #plus(MathContext)

> *Since 1.5*
