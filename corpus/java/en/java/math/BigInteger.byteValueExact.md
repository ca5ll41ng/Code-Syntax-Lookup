---
id: "java-en-function-biginteger-bytevalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.byteValueExact"
signature: "public byte byteValueExact()"
title: "BigInteger.byteValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.byteValueExact

```java
public byte byteValueExact()
```

Converts this `BigInteger` to a `byte`, checking
 for lost information.  If the value of this `BigInteger`
 is out of the range of the `byte` type, then an
 `ArithmeticException` is thrown.

**返回**

- this `BigInteger` converted to a `byte`.

**异常**

- **ArithmeticException** — if the value of `this` will not exactly fit in a `byte`.

**参见**

- BigInteger#byteValue

> *Since 1.8*
