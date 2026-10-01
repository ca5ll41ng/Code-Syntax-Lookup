---
id: "java-en-function-math-absexact"
language: "java"
lang: "en"
category: "function"
name: "Math.absExact"
signature: "public static int absExact(int a)"
title: "Math.absExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.absExact

```java
public static int absExact(int a)
```

Returns the mathematical absolute value of an `int` value
 if it is exactly representable as an `int`, throwing
 `ArithmeticException` if the result overflows the
 positive `int` range.

 

Since the range of two's complement integers is asymmetric
 with one additional negative value (JLS {@jls 4.2.1}), the
 mathematical absolute value of `MIN_VALUE`
 overflows the positive `int` range, so an exception is
 thrown for that argument.

**参数**

- **a** — the argument whose absolute value is to be determined

**返回**

- the absolute value of the argument, unless overflow occurs

**异常**

- **ArithmeticException** — if the argument is `MIN_VALUE`

**参见**

- Math#abs(int)

> *Since 15*
