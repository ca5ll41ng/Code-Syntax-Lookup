---
id: "java-en-function-completionstage-thencombineasync"
language: "java"
lang: "en"
category: "function"
name: "CompletionStage.thenCombineAsync"
signature: "public <U,V> CompletionStage<V> thenCombineAsync (CompletionStage<? extends U> other, BiFunction<? super T,? super U,? extends V> fn)"
title: "CompletionStage.thenCombineAsync"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionStage.thenCombineAsync

```java
public <U,V> CompletionStage<V> thenCombineAsync (CompletionStage<? extends U> other, BiFunction<? super T,? super U,? extends V> fn)
```

Returns a new CompletionStage that, when `this` and the other
 given stage both complete normally, is executed using `this`
 stage's default asynchronous execution facility, with the two
 results as arguments to the supplied function.

 See the `CompletionStage` documentation for rules
 covering exceptional completion.

**参数**

- **other** — the other CompletionStage
- **fn** — the function to use to compute the value of the returned CompletionStage
- **the** — type of the other CompletionStage's result
- **the** — function's return type

**返回**

- the new CompletionStage
