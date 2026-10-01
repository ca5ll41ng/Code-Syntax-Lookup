---
id: "java-en-function-completablefuture-obtrudevalue"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.obtrudeValue"
signature: "public void obtrudeValue(T value)"
title: "CompletableFuture.obtrudeValue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.obtrudeValue

```java
public void obtrudeValue(T value)
```

Forcibly sets or resets the value subsequently returned by
 method `get` and related methods, whether or not
 already completed. This method is designed for use only in
 error recovery actions, and even in such situations may result
 in ongoing dependent completions using established versus
 overwritten outcomes.

**参数**

- **value** — the completion value
