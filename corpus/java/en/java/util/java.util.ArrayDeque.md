---
id: "java-en-function-java-util-arraydeque"
language: "java"
lang: "en"
category: "function"
name: "java.util.ArrayDeque"
title: "ArrayDeque"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque

Resizable-array implementation of the `Deque` interface.  Array
 deques have no capacity restrictions; they grow as necessary to support
 usage.  They are not thread-safe; in the absence of external
 synchronization, they do not support concurrent access by multiple threads.
 Null elements are prohibited.  This class is likely to be faster than
 `Stack` when used as a stack, and faster than `LinkedList`
 when used as a queue.

 

Most `ArrayDeque` operations run in amortized constant time.
 Exceptions include
 `remove(Object) remove`,
 `removeFirstOccurrence removeFirstOccurrence`,
 `removeLastOccurrence removeLastOccurrence`,
 `contains contains`,
 `iterator iterator.remove`,
 and the bulk operations, all of which run in linear time.

 

The iterators returned by this class's `iterator() iterator`
 method are fail-fast: If the deque is modified at any time after
 the iterator is created, in any way except through the iterator's own
 `remove` method, the iterator will generally throw a `ConcurrentModificationException`.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the
 future.

 

Note that the fail-fast behavior of an iterator cannot be guaranteed
 as it is, generally speaking, impossible to make any hard guarantees in the
 presence of unsynchronized concurrent modification.  Fail-fast iterators
 throw `ConcurrentModificationException` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness: the fail-fast behavior of iterators
 should be used only to detect bugs.

 

This class and its iterator implement all of the optional methods of the
 `Collection`, `SequencedCollection`, and `Iterator` interfaces.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this deque

> *Since 1.6*
