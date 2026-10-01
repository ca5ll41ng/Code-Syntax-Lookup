---
id: "java-en-function-list-addall"
language: "java"
lang: "en"
category: "function"
name: "List.addAll"
signature: "boolean addAll(Collection<? extends E> c)"
title: "List.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.addAll

```java
boolean addAll(Collection<? extends E> c)
```

Appends all of the elements in the specified collection to the end of
 this list, in the order that they are returned by the specified
 collection's iterator (optional operation).  The behavior of this
 operation is undefined if the specified collection is modified while
 the operation is in progress.  (Note that this will occur if the
 specified collection is this list, and it's nonempty.)

**参数**

- **c** — collection containing elements to be added to this list

**返回**

- `true` if this list changed as a result of the call

**异常**

- **UnsupportedOperationException** — if the `addAll` operation is not supported by this list
- **ClassCastException** — if the class of an element of the specified collection prevents it from being added to this list
- **NullPointerException** — if the specified collection contains one or more null elements and this list does not permit null elements, or if the specified collection is null
- **IllegalArgumentException** — if some property of an element of the specified collection prevents it from being added to this list

**参见**

- #add(Object)
