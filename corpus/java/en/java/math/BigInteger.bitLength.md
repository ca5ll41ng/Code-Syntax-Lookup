---
id: "java-en-function-biginteger-bitlength"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.bitLength"
signature: "public int bitLength()"
title: "BigInteger.bitLength"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.bitLength

```java
public int bitLength()
```

Returns the number of bits in the minimal two's-complement
 representation of this BigInteger, excluding a sign bit.
 For positive BigIntegers, this is equivalent to the number of bits in
 the ordinary binary representation.  For zero this method returns
 `0`.  (Computes `(ceil(log2(this < 0 ? -this : this+1)))`.)

**返回**

- number of bits in the minimal two's-complement representation of this BigInteger, excluding a sign bit.
