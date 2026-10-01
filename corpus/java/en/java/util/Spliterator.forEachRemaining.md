---
id: "java-en-function-spliterator-foreachremaining"
language: "java"
lang: "en"
category: "function"
name: "Spliterator.forEachRemaining"
signature: "default void forEachRemaining(Consumer<? super T> action)"
title: "Spliterator.forEachRemaining"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterator.forEachRemaining

```java
default void forEachRemaining(Consumer<? super T> action)
```

Performs the given action for each remaining element, sequentially in
 the current thread, until all elements have been processed or the action
 throws an exception.  If this Spliterator is `ORDERED`, actions
 are performed in encounter order.  Exceptions thrown by the action
 are relayed to the caller.
 

 Subsequent behavior of a spliterator is unspecified if the action throws
 an exception.

 The default implementation repeatedly invokes `tryAdvance` until
 it returns `false`.  It should be overridden whenever possible.

**参数**

- **action** — The action

**异常**

- **NullPointerException** — if the specified action is null
