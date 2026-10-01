---
id: "java-en-function-biginteger-isprobableprime"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.isProbablePrime"
signature: "public boolean isProbablePrime(int certainty)"
title: "BigInteger.isProbablePrime"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.isProbablePrime

```java
public boolean isProbablePrime(int certainty)
```

Returns `true` if this BigInteger is probably prime,
 `false` if it's definitely composite.  If
 `certainty` is &le; 0, `true` is
 returned.

          and depending on the size of `this` and `certainty`,
          this method could consume a large amount of memory, up to
          exhaustion of available heap space, or could run for a long time.

**参数**

- **certainty** — a measure of the uncertainty that the caller is willing to tolerate: if the call returns `true` the probability that this BigInteger is prime exceeds (1 - 1/2`certainty`).  The execution time of this method is proportional to the value of this parameter.

**返回**

- `true` if this BigInteger is probably prime, `false` if it's definitely composite.

**异常**

- **ArithmeticException** — `this` is too large.
