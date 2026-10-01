---
id: "java-en-function-list-spliterator"
language: "java"
lang: "en"
category: "function"
name: "List.spliterator"
signature: "default Spliterator<E> spliterator()"
title: "List.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.spliterator

```java
default Spliterator<E> spliterator()
```

Creates a `Spliterator` over the elements in this list.

 

The `Spliterator` reports `SIZED` and
 `ORDERED`.  Implementations should document the
 reporting of additional characteristic values.

 The default implementation creates a
 late-binding
 spliterator as follows:
 
 
- If the list is an instance of `RandomAccess` then the default
     implementation creates a spliterator that traverses elements by
     invoking the method `get`.  If such invocation results or
     would result in an `IndexOutOfBoundsException` then the
     spliterator will fail-fast and throw a
     `ConcurrentModificationException`.
     If the list is also an instance of `AbstractList` then the
     spliterator will use the list's `modCount modCount`
     field to provide additional fail-fast behavior.
 
- Otherwise, the default implementation creates a spliterator from the
     list's `Iterator`.  The spliterator inherits the
     fail-fast of the list's iterator.
 

 The created `Spliterator` additionally reports
 `SUBSIZED`.

**返回**

- a `Spliterator` over the elements in this list

> *Since 1.8*
