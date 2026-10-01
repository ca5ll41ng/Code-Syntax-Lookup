---
id: "java-en-function-joiner-timeout"
language: "java"
lang: "en"
category: "function"
name: "Joiner.timeout"
signature: "R timeout() throws R_X"
title: "Joiner.timeout"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.timeout

```java
R timeout() throws R_X
```

Invoked by the `join` method to produce the outcome (result or
 exception) when the scope was opened with a timeout and the timeout expires before
 or while waiting in the `join()` method.

 

 If the outcome is an exception, this method throws the exception with a
 `CancelledByTimeoutException CancelledByTimeoutException` as the
 `getCause() cause`.

 

 This method will be called at most once, by the `join()` method, to
 produce the outcome. The behavior of this method when invoked directly is undefined.

 invoked directly.

**返回**

- the result

**异常**

- **R_X** — with a cause of `CancelledByTimeoutException`, if the outcome is an exception

> *Since 27*
