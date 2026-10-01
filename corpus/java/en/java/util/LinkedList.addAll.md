---
id: "java-en-function-linkedlist-addall"
language: "java"
lang: "en"
category: "function"
name: "LinkedList.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "LinkedList.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedList.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified collection to the end of
 this list, in the order that they are returned by the specified
 collection's iterator.  The behavior of this operation is undefined if
 the specified collection is modified while the operation is in
 progress.  (Note that this will occur if the specified collection is
 this list, and it's nonempty.)

**参数**

- **c** — collection containing elements to be added to this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null
