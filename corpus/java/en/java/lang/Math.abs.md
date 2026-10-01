---
id: "java-en-function-math-abs"
language: "java"
lang: "en"
category: "function"
name: "Math.abs"
signature: "public static int abs(int a)"
title: "Math.abs"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.abs

```java
public static int abs(int a)
```

Returns the absolute value of an `int` value.
 If the argument is not negative, the argument is returned.
 If the argument is negative, the negation of the argument is returned.

 

Note that if the argument is equal to the value of `MIN_VALUE`, the most negative representable `int`
 value, the result is that same value, which is negative. In
 contrast, the `absExact` method throws an
 `ArithmeticException` for this value.

**参数**

- **a** — the argument whose absolute value is to be determined

**返回**

- the absolute value of the argument.

**参见**

- Math#absExact(int)
