---
id: "java-en-function-biginteger-intvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.intValueExact"
signature: "public int intValueExact()"
title: "BigInteger.intValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.intValueExact

```java
public int intValueExact()
```

Converts this `BigInteger` to an `int`, checking
 for lost information.  If the value of this `BigInteger`
 is out of the range of the `int` type, then an
 `ArithmeticException` is thrown.

**返回**

- this `BigInteger` converted to an `int`.

**异常**

- **ArithmeticException** — if the value of `this` will not exactly fit in an `int`.

**参见**

- BigInteger#intValue

> *Since 1.8*
