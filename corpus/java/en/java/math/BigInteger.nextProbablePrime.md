---
id: "java-en-function-biginteger-nextprobableprime"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.nextProbablePrime"
signature: "public BigInteger nextProbablePrime()"
title: "BigInteger.nextProbablePrime"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.nextProbablePrime

```java
public BigInteger nextProbablePrime()
```

Returns the first integer greater than this `BigInteger` that
 is probably prime.  The probability that the number returned by this
 method is composite does not exceed 2-100. This method will
 never skip over a prime when searching: if it returns `p`, there
 is no prime `q` such that `this < q < p`.

          and depending on the size of `this`,
          this method could consume a large amount of memory, up to
          exhaustion of available heap space, or could run for a long time.

**返回**

- the first integer greater than this `BigInteger` that is probably prime.

**异常**

- **ArithmeticException** — `this < 0` or `this` is too large.

> *Since 1.5*
