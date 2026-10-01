---
id: "java-en-function-intconsumer-andthen"
language: "java"
lang: "en"
category: "function"
name: "IntConsumer.andThen"
signature: "default IntConsumer andThen(IntConsumer after)"
title: "IntConsumer.andThen"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/IntConsumer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntConsumer.andThen

```java
default IntConsumer andThen(IntConsumer after)
```

Returns a composed `IntConsumer` that performs, in sequence, this
 operation followed by the `after` operation. If performing either
 operation throws an exception, it is relayed to the caller of the
 composed operation.  If performing this operation throws an exception,
 the `after` operation will not be performed.

**参数**

- **after** — the operation to perform after this operation

**返回**

- a composed `IntConsumer` that performs in sequence this operation followed by the `after` operation

**异常**

- **NullPointerException** — if `after` is null
