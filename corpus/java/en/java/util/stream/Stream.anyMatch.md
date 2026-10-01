---
id: "java-en-function-stream-anymatch"
language: "java"
lang: "en"
category: "function"
name: "Stream.anyMatch"
signature: "boolean anyMatch(Predicate<? super T> predicate)"
title: "Stream.anyMatch"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.anyMatch

```java
boolean anyMatch(Predicate<? super T> predicate)
```

Returns whether any elements of this stream match the provided
 predicate.  May not evaluate the predicate on all elements if not
 necessary for determining the result.  If the stream is empty then
 `false` is returned and the predicate is not evaluated.

 

This is a short-circuiting
 terminal operation.

 This method evaluates the existential quantification of the
 predicate over the elements of the stream (for some x P(x)).

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to elements of this stream

**返回**

- `true` if any elements of the stream match the provided predicate, otherwise `false`
