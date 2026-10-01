---
id: "java-en-function-biginteger-testbit"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.testBit"
signature: "public boolean testBit(int n)"
title: "BigInteger.testBit"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.testBit

```java
public boolean testBit(int n)
```

Returns `true` if and only if the designated bit is set.
 (Computes `((this & (1<<n)) != 0)`.)

**参数**

- **n** — index of bit to test.

**返回**

- `true` if and only if the designated bit is set.

**异常**

- **ArithmeticException** — `n` is negative.
