---
id: "java-en-function-iterator-foreachremaining"
language: "java"
lang: "en"
category: "function"
name: "Iterator.forEachRemaining"
signature: "default void forEachRemaining(Consumer<? super E> action)"
title: "Iterator.forEachRemaining"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Iterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Iterator.forEachRemaining

```java
default void forEachRemaining(Consumer<? super E> action)
```

Performs the given action for each remaining element until all elements
 have been processed or the action throws an exception.  Actions are
 performed in the order of iteration, if that order is specified.
 Exceptions thrown by the action are relayed to the caller.
 

 The behavior of an iterator is unspecified if the action modifies the
 collection in any way (even by calling the `remove remove` method
 or other mutator methods of `Iterator` subtypes),
 unless an overriding class has specified a concurrent modification policy.
 

 Subsequent behavior of an iterator is unspecified if the action throws an
 exception.

 

The default implementation behaves as if:
 
```
`while (hasNext())
         action.accept(next());
 `
```

**参数**

- **action** — The action to be performed for each element

**异常**

- **NullPointerException** — if the specified action is null

> *Since 1.8*
