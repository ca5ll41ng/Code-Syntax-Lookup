---
id: "java-en-function-copyonwritearraylist-addall"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "CopyOnWriteArrayList.addAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified collection to the end
 of this list, in the order that they are returned by the specified
 collection's iterator.

**参数**

- **c** — collection containing elements to be added to this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null

**参见**

- #add(Object)
