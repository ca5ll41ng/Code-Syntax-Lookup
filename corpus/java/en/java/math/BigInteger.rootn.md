---
id: "java-en-function-biginteger-rootn"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.rootn"
signature: "public BigInteger rootn(int n)"
title: "BigInteger.rootn"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.rootn

```java
public BigInteger rootn(int n)
```

Returns the integer `n`th root of this BigInteger. The integer
 `n`th root `r` of the corresponding mathematical integer `x`
 is defined as follows:
 
   
- if `x` &ge; 0, then `r` &ge; 0 is the largest integer such that
   `r``n` &le; `x`;
   
- if `x` &lt; 0, then `r` &le; 0 is the smallest integer such that
   `r``n` &ge; `x`.
 

 If the root is defined, it is equal to the value of
 `x.signum()`&sdot; &lfloor;`|nthRoot(x, n)|`&rfloor;,
 where `nthRoot(x, n)` denotes the real `n`th root of `x`
 treated as a real.
 Otherwise, the method throws an `ArithmeticException`.

 

Note that the magnitude of the integer `n`th root will be less than
 the magnitude of the real `n`th root if the latter is not representable
 as an integral value.

**参数**

- **n** — the root degree

**返回**

- the integer `n`th root of `this`

**异常**

- **ArithmeticException** — if `n <= 0`.
- **ArithmeticException** — if `n` is even and `this` is negative.

**参见**

- #sqrt()

> *Since 26*
