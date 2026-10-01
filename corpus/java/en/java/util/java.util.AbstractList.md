---
id: "java-en-function-java-util-abstractlist"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractList"
title: "AbstractList"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractList

This class provides a skeletal implementation of the `List`
 interface to minimize the effort required to implement this interface
 backed by a "random access" data store (such as an array).  For sequential
 access data (such as a linked list), `AbstractSequentialList` should
 be used in preference to this class.

 

To implement an unmodifiable list, the programmer needs only to extend
 this class and provide implementations for the `get` and
 `size` methods.

 

To implement a modifiable list, the programmer must additionally
 override the `set` method (which otherwise
 throws an `UnsupportedOperationException`).  If the list is
 variable-size the programmer must additionally override the
 `add` and `remove` methods.

 

The programmer should generally provide a void (no argument) and collection
 constructor, as per the recommendation in the `Collection` interface
 specification.

 

Unlike the other abstract collection implementations, the programmer does
 not have to provide an iterator implementation; the iterator and
 list iterator are implemented by this class, on top of the "random access"
 methods:
 `get`,
 `set`,
 `add` and
 `remove`.

 

The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if the
 collection being implemented admits a more efficient implementation.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements in this list

> *Since 1.2*
