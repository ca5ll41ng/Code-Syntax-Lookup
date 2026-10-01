---
id: "java-en-function-abstractstackwalker-batchsize"
language: "java"
lang: "en"
category: "function"
name: "AbstractStackWalker.batchSize"
signature: "protected abstract int batchSize(int lastBatchSize)"
title: "AbstractStackWalker.batchSize"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StackStreamFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStackWalker.batchSize

```java
protected abstract int batchSize(int lastBatchSize)
```

Returns the suggested next batch size.

 Subclass should override this method to change the batch size

**参数**

- **lastBatchSize** — last batch size

**返回**

- suggested batch size
