---
id: "java-en-function-bigdecimal-pow"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.pow"
signature: "public BigDecimal pow(int n)"
title: "BigDecimal.pow"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.pow

```java
public BigDecimal pow(int n)
```

Returns a `BigDecimal` whose value is
 (thisn), The power is computed exactly, to
 unlimited precision.

 

The parameter `n` must be in the range 0 through
 999999999, inclusive.  `ZERO.pow(0)` returns `ONE`.

 Note that future releases may expand the allowable exponent
 range of this method.

**参数**

- **n** — power to raise this `BigDecimal` to.

**返回**

- thisn

**异常**

- **ArithmeticException** — if `n` is out of range.

> *Since 1.5*
