---
id: "java-en-function-biginteger-tostring"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.toString"
signature: "public String toString(int radix)"
title: "BigInteger.toString"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.toString

```java
public String toString(int radix)
```

Returns the String representation of this BigInteger in the
 given radix.  If the radix is outside the range from `MIN_RADIX` to `MAX_RADIX` inclusive,
 it will default to 10 (as is the case for
 `Integer.toString`).  The digit-to-character mapping
 provided by `Character.forDigit` is used, and a minus
 sign is prepended if appropriate.  (This representation is
 compatible with the `BigInteger(String, int) (String,
 int)` constructor.)

**参数**

- **radix** — radix of the String representation.

**返回**

- String representation of this BigInteger in the given radix.

**参见**

- Integer#toString
- Character#forDigit
- #BigInteger(java.lang.String, int)
