---
id: "java-en-function-bigdecimal-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.hashCode"
signature: "public int hashCode()"
title: "BigDecimal.hashCode"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.hashCode

```java
public int hashCode()
```

Returns the hash code for this `BigDecimal`.
 The hash code is computed as a function of the `unscaledValue() unscaled value` and the `scale()
 scale` of this `BigDecimal`.

 Two `BigDecimal` objects that are numerically equal but
 differ in scale (like 2.0 and 2.00) will generally not
 have the same hash code.

**返回**

- hash code for this `BigDecimal`.

**参见**

- #equals(Object)
