---
id: "java-en-function-futuretask-set"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.set"
signature: "protected void set(V v)"
title: "FutureTask.set"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.set

```java
protected void set(V v)
```

Sets the result of this future to the given value unless
 this future has already been set or has been cancelled.

 

This method is invoked internally by the `run` method
 upon successful completion of the computation. Invocation in
 other contexts has undefined effects. Any override of this
 method in subclasses should include `super.set(v)`.

**参数**

- **v** — the value
