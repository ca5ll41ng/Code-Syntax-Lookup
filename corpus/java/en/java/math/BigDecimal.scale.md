---
id: "java-en-function-bigdecimal-scale"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.scale"
signature: "public int scale()"
title: "BigDecimal.scale"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.scale

```java
public int scale()
```

Returns the scale of this `BigDecimal`.  If zero
 or positive, the scale is the number of digits to the right of
 the decimal point.  If negative, the unscaled value of the
 number is multiplied by ten to the power of the negation of the
 scale.  For example, a scale of `-3` means the unscaled
 value is multiplied by 1000.

**返回**

- the scale of this `BigDecimal`.
