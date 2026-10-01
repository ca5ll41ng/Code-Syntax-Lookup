---
id: "java-en-function-downstream-push"
language: "java"
lang: "en"
category: "function"
name: "Downstream.push"
signature: "boolean push(T element)"
title: "Downstream.push"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Downstream.push

```java
boolean push(T element)
```

Pushes, if possible, the provided element downstream -- to the next
 stage in the pipeline.

 elements will be accepted and subsequent invocations of this method
 will return `false`.

**参数**

- **element** — the element to push downstream

**返回**

- `true` if more elements can be sent, and `false` if not.
