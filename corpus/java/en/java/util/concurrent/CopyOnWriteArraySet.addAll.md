---
id: "java-en-function-copyonwritearrayset-addall"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "CopyOnWriteArraySet.addAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection to this set if
 they're not already present.  If the specified collection is also a
 set, the `addAll` operation effectively modifies this set so
 that its value is the union of the two sets.  The behavior of
 this operation is undefined if the specified collection is modified
 while the operation is in progress.

**参数**

- **c** — collection containing elements to be added to this set

**返回**

- `true` if this set changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null

**参见**

- #add(Object)
