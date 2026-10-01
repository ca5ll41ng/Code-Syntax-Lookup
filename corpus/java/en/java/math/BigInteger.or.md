---
id: "java-en-function-biginteger-or"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.or"
signature: "public BigInteger or(BigInteger val)"
title: "BigInteger.or"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.or

```java
public BigInteger or(BigInteger val)
```

Returns a BigInteger whose value is `(this | val)`.  (This method
 returns a negative BigInteger if and only if either this or val is
 negative.)

**参数**

- **val** — value to be OR'ed with this BigInteger.

**返回**

- `this | val`
