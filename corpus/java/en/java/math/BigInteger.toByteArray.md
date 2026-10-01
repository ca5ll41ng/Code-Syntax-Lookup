---
id: "java-en-function-biginteger-tobytearray"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.toByteArray"
signature: "public byte[] toByteArray()"
title: "BigInteger.toByteArray"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.toByteArray

```java
public byte[] toByteArray()
```

Returns a byte array containing the two's-complement
 representation of this BigInteger.  The byte array will be in
 big-endian byte-order: the most significant byte is in
 the zeroth element.  The array will contain the minimum number
 of bytes required to represent this BigInteger, including at
 least one sign bit, which is `(ceil((this.bitLength() +
 1)/8))`.  (This representation is compatible with the
 `BigInteger` constructor.)

**返回**

- a byte array containing the two's-complement representation of this BigInteger.

**参见**

- #BigInteger(byte[])
