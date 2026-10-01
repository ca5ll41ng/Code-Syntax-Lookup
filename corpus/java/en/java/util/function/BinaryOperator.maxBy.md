---
id: "java-en-function-binaryoperator-maxby"
language: "java"
lang: "en"
category: "function"
name: "BinaryOperator.maxBy"
signature: "public static <T> BinaryOperator<T> maxBy(Comparator<? super T> comparator)"
title: "BinaryOperator.maxBy"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/BinaryOperator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryOperator.maxBy

```java
public static <T> BinaryOperator<T> maxBy(Comparator<? super T> comparator)
```

Returns a `BinaryOperator` which returns the greater of two elements
 according to the specified `Comparator`.

**参数**

- **the** — type of the input arguments of the comparator
- **comparator** — a `Comparator` for comparing the two values

**返回**

- a `BinaryOperator` which returns the greater of its operands, according to the supplied `Comparator`

**异常**

- **NullPointerException** — if the argument is null
