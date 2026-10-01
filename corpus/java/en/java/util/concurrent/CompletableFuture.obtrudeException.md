---
id: "java-en-function-completablefuture-obtrudeexception"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.obtrudeException"
signature: "public void obtrudeException(Throwable ex)"
title: "CompletableFuture.obtrudeException"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.obtrudeException

```java
public void obtrudeException(Throwable ex)
```

Forcibly causes subsequent invocations of method `get`
 and related methods to throw the given exception, whether or
 not already completed. This method is designed for use only in
 error recovery actions, and even in such situations may result
 in ongoing dependent completions using established versus
 overwritten outcomes.

**参数**

- **ex** — the exception

**异常**

- **NullPointerException** — if the exception is null
