---
id: "java-en-function-arraylist-addall"
language: "java"
lang: "en"
category: "function"
name: "ArrayList.addAll"
signature: "public boolean addAll(Collection<? extends E> c)"
title: "ArrayList.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayList.addAll

```java
public boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified collection to the end of
 this list, in the order that they are returned by the
 specified collection's Iterator.  The behavior of this operation is
 undefined if the specified collection is modified while the operation
 is in progress.  (This implies that the behavior of this call is
 undefined if the specified collection is this list, and this
 list is nonempty.)

**参数**

- **c** — collection containing elements to be added to this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **NullPointerException** — if the specified collection is null
