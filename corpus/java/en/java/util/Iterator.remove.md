---
id: "java-en-function-iterator-remove"
language: "java"
lang: "en"
category: "function"
name: "Iterator.remove"
signature: "default void remove()"
title: "Iterator.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Iterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Iterator.remove

```java
default void remove()
```

Removes from the underlying collection the last element returned
 by this iterator (optional operation).  This method can be called
 only once per call to `next`.
 

 The behavior of an iterator is unspecified if the underlying collection
 is modified while the iteration is in progress in any way other than by
 calling this method, unless an overriding class has specified a
 concurrent modification policy.
 

 The behavior of an iterator is unspecified if this method is called
 after a call to the `forEachRemaining forEachRemaining` method.

 The default implementation throws an instance of
 `UnsupportedOperationException` and performs no other action.

**异常**

- **UnsupportedOperationException** — if the `remove` operation is not supported by this iterator
- **IllegalStateException** — if the `next` method has not yet been called, or the `remove` method has already been called after the last call to the `next` method
