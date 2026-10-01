---
id: "java-en-function-copyonwritearraylist-addallabsent"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.addAllAbsent"
signature: "public int addAllAbsent(Collection<? extends E> c)"
title: "CopyOnWriteArrayList.addAllAbsent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.addAllAbsent

```java
public int addAllAbsent(Collection<? extends E> c)
```

Appends all of the elements in the specified collection that
 are not already contained in this list, to the end of
 this list, in the order that they are returned by the
 specified collection's iterator.

**参数**

- **c** — collection containing elements to be added to this list

**返回**

- the number of elements added

**异常**

- **NullPointerException** — if the specified collection is null

**参见**

- #addIfAbsent(Object)
