---
id: "java-en-function-biginteger-biginteger"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.BigInteger"
signature: "public BigInteger(byte[] val, int off, int len)"
title: "BigInteger.BigInteger"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.BigInteger

```java
public BigInteger(byte[] val, int off, int len)
```

Translates a byte sub-array containing the two's-complement binary
 representation of a BigInteger into a BigInteger.  The sub-array is
 specified via an offset into the array and a length.  The sub-array is
 assumed to be in big-endian byte-order: the most significant
 byte is the element at index `off`.  The `val` array is
 assumed to be unchanged for the duration of the constructor call.

 An `IndexOutOfBoundsException` is thrown if the length of the array
 `val` is non-zero and either `off` is negative, `len`
 is negative, or `off+len` is greater than the length of
 `val`.

**参数**

- **val** — byte array containing a sub-array which is the big-endian two's-complement binary representation of a BigInteger.
- **off** — the start offset of the binary representation.
- **len** — the number of bytes to use.

**异常**

- **NumberFormatException** — `val` is zero bytes long.
- **IndexOutOfBoundsException** — if the provided array offset and length would cause an index into the byte array to be negative or greater than or equal to the array length.

> *Since 9*
