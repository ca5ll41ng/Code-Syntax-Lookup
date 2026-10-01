---
id: "java-en-function-abstracttask-doleaf"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.doLeaf"
signature: "protected abstract R doLeaf()"
title: "AbstractTask.doLeaf"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.doLeaf

```java
protected abstract R doLeaf()
```

Computes the result associated with a leaf node.  Will be called by
 `compute()` and the result passed to `setLocalResult()`

**返回**

- the computed result of a leaf node
