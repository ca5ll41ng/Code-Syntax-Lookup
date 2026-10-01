---
id: "java-en-function-completionstage-whencomplete"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.whenComplete"
signature: "public CompletionStage<T> whenComplete (BiConsumer<? super T, ? super Throwable> action)"
title: "CompletionStage.whenComplete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.whenComplete

```java
public CompletionStage<T> whenComplete (BiConsumer<? super T, ? super Throwable> action)
```

Returns a new CompletionStage with the same result or exception as
 `this` stage, that executes the given action when `this` stage completes.

 

When `this` stage is complete, the given action is invoked
 with the result (or `null` if none) and the exception (or
 `null` if none) of `this` stage as arguments.  The returned
 stage is completed when the action returns.

 

Unlike method `handle handle`,
 method `whenComplete` is not designed to translate completion outcomes,
 so the supplied action should not throw an exception. However,
 if it does, the following rules apply: if `this` stage completed
 normally but the supplied action throws an exception, then the
 returned stage completes exceptionally with the supplied
 action's exception. Or, if `this` stage completed exceptionally
 and the supplied action throws an exception, then the returned
 stage completes exceptionally with `this` stage's exception.

**参数**

- **action** — the action to perform

**返回**

- the new CompletionStage
