---
id: "java-en-function-copyonwritearrayset-equals"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.equals"
signature: "public boolean equals(Object o)"
title: "CopyOnWriteArraySet.equals"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this set for equality.
 Returns `true` if the specified object is the same object
 as this object, or if it is also a `Set` and the elements
 returned by an `iterator() iterator` over the
 specified set are the same as the elements returned by an
 iterator over this set.  More formally, the two iterators are
 considered to return the same elements if they return the same
 number of elements and for every element `e1` returned by
 the iterator over the specified set, there is an element
 `e2` returned by the iterator over this set such that
 `Objects.equals(e1, e2)`.

**参数**

- **o** — object to be compared for equality with this set

**返回**

- `true` if the specified object is equal to this set
