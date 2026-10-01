---
id: "java-en-function-iterable-foreach"
language: "java"
lang: "en"
category: "function"
name: "Iterable.forEach"
signature: "default void forEach(Consumer<? super T> action)"
title: "Iterable.forEach"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Iterable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Iterable.forEach

```java
default void forEach(Consumer<? super T> action)
```

Performs the given action for each element of the `Iterable`
 until all elements have been processed or the action throws an
 exception.  Actions are performed in the order of iteration, if that
 order is specified.  Exceptions thrown by the action are relayed to the
 caller.
 

 The behavior of this method is unspecified if the action performs
 side-effects that modify the underlying source of elements, unless an
 overriding class has specified a concurrent modification policy.

 

The default implementation behaves as if:
 
```
`for (T t : this)
         action.accept(t);
 `
```

**参数**

- **action** — The action to be performed for each element

**异常**

- **NullPointerException** — if the specified action is null

> *Since 1.8*
