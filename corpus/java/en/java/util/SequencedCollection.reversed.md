---
id: "java-en-function-sequencedcollection-reversed"
language: "java"
lang: "en"
category: "function"
name: "SequencedCollection.reversed"
signature: "SequencedCollection<E> reversed()"
title: "SequencedCollection.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedCollection.reversed

```java
SequencedCollection<E> reversed()
```

Returns a reverse-ordered view of this collection.
 The encounter order of elements in the returned view is the inverse of the encounter
 order of elements in this collection. The reverse ordering affects all order-sensitive
 operations, including those on the view collections of the returned view. If the collection
 implementation permits modifications to this view, the modifications "write through" to the
 underlying collection. Changes to the underlying collection might or might not be visible
 in this reversed view, depending upon the implementation.

**返回**

- a reverse-ordered view of this collection
