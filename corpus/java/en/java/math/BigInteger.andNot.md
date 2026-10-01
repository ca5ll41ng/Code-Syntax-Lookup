---
id: "java-en-function-biginteger-andnot"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.andNot"
signature: "public BigInteger andNot(BigInteger val)"
title: "BigInteger.andNot"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.andNot

```java
public BigInteger andNot(BigInteger val)
```

Returns a BigInteger whose value is `(this & ~val)`.  This
 method, which is equivalent to `and(val.not())`, is provided as
 a convenience for masking operations.  (This method returns a negative
 BigInteger if and only if `this` is negative and `val` is
 positive.)

**参数**

- **val** — value to be complemented and AND'ed with this BigInteger.

**返回**

- `this & ~val`
