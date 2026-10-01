---
id: "java-en-function-biginteger-and"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.and"
signature: "public BigInteger and(BigInteger val)"
title: "BigInteger.and"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.and

```java
public BigInteger and(BigInteger val)
```

Returns a BigInteger whose value is `(this & val)`.  (This
 method returns a negative BigInteger if and only if this and val are
 both negative.)

**参数**

- **val** — value to be AND'ed with this BigInteger.

**返回**

- `this & val`
