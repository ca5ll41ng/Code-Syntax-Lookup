---
id: "java-en-function-biginteger-pow"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.pow"
signature: "public BigInteger pow(int exponent)"
title: "BigInteger.pow"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.pow

```java
public BigInteger pow(int exponent)
```

Returns a BigInteger whose value is (thisexponent).
 Note that `exponent` is an integer rather than a BigInteger.

**参数**

- **exponent** — exponent to which this BigInteger is to be raised.

**返回**

- thisexponent

**异常**

- **ArithmeticException** — `exponent` is negative.  (This would cause the operation to yield a non-integer value.)
