---
id: "java-en-function-intunaryoperator-andthen"
language: "java"
lang: "en"
category: "function"
name: "IntUnaryOperator.andThen"
signature: "default IntUnaryOperator andThen(IntUnaryOperator after)"
title: "IntUnaryOperator.andThen"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/IntUnaryOperator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntUnaryOperator.andThen

```java
default IntUnaryOperator andThen(IntUnaryOperator after)
```

Returns a composed operator that first applies this operator to
 its input, and then applies the `after` operator to the result.
 If evaluation of either operator throws an exception, it is relayed to
 the caller of the composed operator.

**参数**

- **after** — the operator to apply after this operator is applied

**返回**

- a composed operator that first applies this operator and then applies the `after` operator

**异常**

- **NullPointerException** — if after is null

**参见**

- #compose(IntUnaryOperator)
