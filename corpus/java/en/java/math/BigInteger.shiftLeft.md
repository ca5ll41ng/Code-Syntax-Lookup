---
id: "java-en-function-biginteger-shiftleft"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.shiftLeft"
signature: "public BigInteger shiftLeft(int n)"
title: "BigInteger.shiftLeft"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.shiftLeft

```java
public BigInteger shiftLeft(int n)
```

Returns a BigInteger whose value is `(this << n)`.
 The shift distance, `n`, may be negative, in which case
 this method performs a right shift.
 (Computes floor(this * 2n).)

**参数**

- **n** — shift distance, in bits.

**返回**

- `this << n`

**参见**

- #shiftRight
