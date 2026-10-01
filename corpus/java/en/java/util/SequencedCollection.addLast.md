---
id: "java-en-function-sequencedcollection-addlast"
language: "java"
lang: "en"
category: "function"
name: "SequencedCollection.addLast"
signature: "default void addLast(E e)"
title: "SequencedCollection.addLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedCollection.addLast

```java
default void addLast(E e)
```

Adds an element as the last element of this collection (optional operation).
 After this operation completes normally, the given element will be a member of
 this collection, and it will be the last element in encounter order.

 The implementation in this interface always throws `UnsupportedOperationException`.

**参数**

- **e** — the element to be added.

**异常**

- **NullPointerException** — if the specified element is null and this collection does not permit null elements
- **UnsupportedOperationException** — if this collection implementation does not support this operation
