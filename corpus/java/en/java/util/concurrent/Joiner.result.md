---
id: "java-en-function-joiner-result"
language: "java"
lang: "en"
category: "function"
name: "Joiner.result"
signature: "R result() throws R_X"
title: "Joiner.result"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.result

```java
R result() throws R_X
```

Invoked by the `join` method to produce the outcome (result or
 exception) after waiting for all subtasks to complete or the scope is `#Cancellation cancelled`. This method is not invoked if the
 scope was opened with a timeout and the timeout expires before or while waiting.

 

 This method will be called at most once, by the `join()` method, to
 produce the outcome. The behavior of this method when invoked directly is undefined.

 invoked directly.

**返回**

- the result

**异常**

- **R_X** — if the outcome is an exception
