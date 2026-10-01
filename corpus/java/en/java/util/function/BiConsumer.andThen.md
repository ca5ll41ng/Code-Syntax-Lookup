---
id: "java-en-function-biconsumer-andthen"
language: "java"
lang: "en"
category: "function"
name: "BiConsumer.andThen"
signature: "default BiConsumer<T, U> andThen(BiConsumer<? super T, ? super U> after)"
title: "BiConsumer.andThen"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/BiConsumer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BiConsumer.andThen

```java
default BiConsumer<T, U> andThen(BiConsumer<? super T, ? super U> after)
```

Returns a composed `BiConsumer` that performs, in sequence, this
 operation followed by the `after` operation. If performing either
 operation throws an exception, it is relayed to the caller of the
 composed operation.  If performing this operation throws an exception,
 the `after` operation will not be performed.

**参数**

- **after** — the operation to perform after this operation

**返回**

- a composed `BiConsumer` that performs in sequence this operation followed by the `after` operation

**异常**

- **NullPointerException** — if `after` is null
