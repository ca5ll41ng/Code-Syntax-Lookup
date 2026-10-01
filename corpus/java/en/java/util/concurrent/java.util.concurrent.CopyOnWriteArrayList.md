---
id: "java-en-function-java-util-concurrent-copyonwritearraylist"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.CopyOnWriteArrayList"
title: "CopyOnWriteArrayList"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList

A thread-safe variant of `java.util.ArrayList` in which all mutative
 operations (`add`, `set`, and so on) are implemented by
 making a fresh copy of the underlying array.

 

This is ordinarily too costly, but may be more efficient
 than alternatives when traversal operations vastly outnumber
 mutations, and is useful when you cannot or don't want to
 synchronize traversals, yet need to preclude interference among
 concurrent threads.  The "snapshot" style iterator method uses a
 reference to the state of the array at the point that the iterator
 was created. This array never changes during the lifetime of the
 iterator, so interference is impossible and the iterator is
 guaranteed not to throw `ConcurrentModificationException`.
 The iterator will not reflect additions, removals, or changes to
 the list since the iterator was created.  Element-changing
 operations on iterators themselves (`remove`, `set`, and
 `add`) are not supported. These methods throw
 `UnsupportedOperationException`.

 

All elements are permitted, including `null`.

 

Memory consistency effects: As with other concurrent
 collections, actions in a thread prior to placing an object into a
 `CopyOnWriteArrayList`
 happen-before
 actions subsequent to the access or removal of that element from
 the `CopyOnWriteArrayList` in another thread.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this list

> *Since 1.5*
