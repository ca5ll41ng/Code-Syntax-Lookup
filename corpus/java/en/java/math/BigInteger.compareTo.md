---
id: "java-en-function-biginteger-compareto"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.compareTo"
signature: "public int compareTo(BigInteger val)"
title: "BigInteger.compareTo"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.compareTo

```java
public int compareTo(BigInteger val)
```

Compares this BigInteger with the specified BigInteger.  This
 method is provided in preference to individual methods for each
 of the six boolean comparison operators (<, ==,
 >, >=, !=, <=).  The suggested
 idiom for performing these comparisons is: `(x.compareTo(y)` &lt;op&gt; `0)`, where
 &lt;op&gt; is one of the six comparison operators.

**参数**

- **val** — BigInteger to which this BigInteger is to be compared.

**返回**

- -1, 0 or 1 as this BigInteger is numerically less than, equal to, or greater than `val`.
