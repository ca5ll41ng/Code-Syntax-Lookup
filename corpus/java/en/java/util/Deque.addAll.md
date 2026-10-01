---
id: "java-en-function-deque-addall"
language: "java"
lang: "en"
category: "function"
name: "Deque.addAll"
signature: "boolean addAll(Collection<? extends E> c)"
title: "Deque.addAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.addAll

```java
boolean addAll(Collection<? extends E> c)
```

Adds all of the elements in the specified collection at the end
 of this deque, as if by calling `addLast` on each one,
 in the order that they are returned by the collection's iterator.

 

When using a capacity-restricted deque, it is generally preferable
 to call `offer(Object) offer` separately on each element.

 

An exception encountered while trying to add an element may result
 in only some of the elements having been successfully added when
 the associated exception is thrown.

**参数**

- **c** — the elements to be inserted into this deque

**返回**

- `true` if this deque changed as a result of the call

**异常**

- **IllegalStateException** — if not all the elements can be added at this time due to insertion restrictions
- **ClassCastException** — if the class of an element of the specified collection prevents it from being added to this deque
- **NullPointerException** — if the specified collection contains a null element and this deque does not permit null elements, or if the specified collection is null
- **IllegalArgumentException** — if some property of an element of the specified collection prevents it from being added to this deque
