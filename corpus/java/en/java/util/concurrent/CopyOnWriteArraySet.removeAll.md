---
id: "java-en-function-copyonwritearrayset-removeall"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.removeAll"
signature: "public boolean removeAll(Collection<?> c)"
title: "CopyOnWriteArraySet.removeAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.removeAll

```java
public boolean removeAll(Collection<?> c)
```

Removes from this set all of its elements that are contained in the
 specified collection.  If the specified collection is also a set,
 this operation effectively modifies this set so that its value is the
 asymmetric set difference of the two sets.

**参数**

- **c** — collection containing elements to be removed from this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **ClassCastException** — if the class of an element of this set is incompatible with the specified collection (optional)
- **NullPointerException** — if this set contains a null element and the specified collection does not permit null elements (optional), or if the specified collection is null

**参见**

- #remove(Object)
