---
id: "java-en-function-bigdecimal-bigdecimal"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.BigDecimal"
signature: "public BigDecimal(char[] in, int offset, int len)"
title: "BigDecimal.BigDecimal"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.BigDecimal

```java
public BigDecimal(char[] in, int offset, int len)
```

Translates a character array representation of a
 `BigDecimal` into a `BigDecimal`, accepting the
 same sequence of characters as the `BigDecimal`
 constructor, while allowing a sub-array to be specified.

 within a character array, using this constructor is faster than
 converting the `char` array to string and using the
 `BigDecimal(String)` constructor.

**参数**

- **in** — `char` array that is the source of characters.
- **offset** — first character in the array to inspect.
- **len** — number of characters to consider.

**异常**

- **NumberFormatException** — if `in` is not a valid representation of a `BigDecimal` or the defined subarray is not wholly within `in`.

> *Since 1.5*
