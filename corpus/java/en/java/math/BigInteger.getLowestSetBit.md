---
id: "java-en-function-biginteger-getlowestsetbit"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.getLowestSetBit"
signature: "public int getLowestSetBit()"
title: "BigInteger.getLowestSetBit"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.getLowestSetBit

```java
public int getLowestSetBit()
```

Returns the index of the rightmost (lowest-order) one bit in this
 BigInteger (the number of zero bits to the right of the rightmost
 one bit).  Returns -1 if this BigInteger contains no one bits.
 (Computes `(this == 0? -1 : log2(this & -this))`.)

**返回**

- index of the rightmost one bit in this BigInteger.
