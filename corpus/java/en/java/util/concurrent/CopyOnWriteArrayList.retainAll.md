---
id: "java-en-function-copyonwritearraylist-retainall"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.retainAll"
signature: "public boolean retainAll(Collection<?> c)"
title: "CopyOnWriteArrayList.retainAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.retainAll

```java
public boolean retainAll(Collection<?> c)
```

Retains only the elements in this list that are contained in the
 specified collection.  In other words, removes from this list all of
 its elements that are not contained in the specified collection.

**参数**

- **c** — collection containing elements to be retained in this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **ClassCastException** — if the class of an element of this list is incompatible with the specified collection (optional)
- **NullPointerException** — if this list contains a null element and the specified collection does not permit null elements (optional), or if the specified collection is null

**参见**

- #remove(Object)
