---
id: "java-en-function-doubleunaryoperator-compose"
language: "java"
lang: "en"
category: "function"
name: "DoubleUnaryOperator.compose"
signature: "default DoubleUnaryOperator compose(DoubleUnaryOperator before)"
title: "DoubleUnaryOperator.compose"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/DoubleUnaryOperator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleUnaryOperator.compose

```java
default DoubleUnaryOperator compose(DoubleUnaryOperator before)
```

Returns a composed operator that first applies the `before`
 operator to its input, and then applies this operator to the result.
 If evaluation of either operator throws an exception, it is relayed to
 the caller of the composed operator.

**参数**

- **before** — the operator to apply before this operator is applied

**返回**

- a composed operator that first applies the `before` operator and then applies this operator

**异常**

- **NullPointerException** — if before is null

**参见**

- #andThen(DoubleUnaryOperator)
