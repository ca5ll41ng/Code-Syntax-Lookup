---
id: "java-en-function-java-util-abstractsequentiallist"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractSequentialList"
title: "AbstractSequentialList"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSequentialList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSequentialList

This class provides a skeletal implementation of the `List`
 interface to minimize the effort required to implement this interface
 backed by a "sequential access" data store (such as a linked list).  For
 random access data (such as an array), `AbstractList` should be used
 in preference to this class.

 This class is the opposite of the `AbstractList` class in the sense
 that it implements the "random access" methods (`get(int index)`,
 `set(int index, E element)`, `add(int index, E element)` and
 `remove(int index)`) on top of the list's list iterator, instead of
 the other way around.

 To implement a list the programmer needs only to extend this class and
 provide implementations for the `listIterator` and `size`
 methods.  For an unmodifiable list, the programmer need only implement the
 list iterator's `hasNext`, `next`, `hasPrevious`,
 `previous` and `index` methods.

 For a modifiable list the programmer should additionally implement the list
 iterator's `set` method.  For a variable-size list the programmer
 should additionally implement the list iterator's `remove` and
 `add` methods.

 The programmer should generally provide a void (no argument) and collection
 constructor, as per the recommendation in the `Collection` interface
 specification.

 This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements in this list

**参见**

- Collection
- List
- AbstractList
- AbstractCollection

> *Since 1.2*
