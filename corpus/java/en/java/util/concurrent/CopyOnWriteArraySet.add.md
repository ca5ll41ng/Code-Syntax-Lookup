---
id: "java-en-function-copyonwritearrayset-add"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.add"
signature: "public boolean add(E e)"
title: "CopyOnWriteArraySet.add"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.add

```java
public boolean add(E e)
```

Adds the specified element to this set if it is not already present.
 More formally, adds the specified element `e` to this set if
 the set contains no element `e2` such that
 `Objects.equals(e, e2)`.
 If this set already contains the element, the call leaves the set
 unchanged and returns `false`.

**参数**

- **e** — element to be added to this set

**返回**

- `true` if this set did not already contain the specified element
