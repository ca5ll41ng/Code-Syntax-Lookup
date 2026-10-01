---
id: "java-en-function-java-util-abstractcollection"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractCollection"
title: "AbstractCollection"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection

This class provides a skeletal implementation of the `Collection`
 interface, to minimize the effort required to implement this interface. 

 To implement an unmodifiable collection, the programmer needs only to
 extend this class and provide implementations for the `iterator` and
 `size` methods.  (The iterator returned by the `iterator`
 method must implement `hasNext` and `next`.)

 To implement a modifiable collection, the programmer must additionally
 override this class's `add` method (which otherwise throws an
 `UnsupportedOperationException`), and the iterator returned by the
 `iterator` method must additionally implement its `remove`
 method.

 The programmer should generally provide a void (no argument) and
 `Collection` constructor, as per the recommendation in the
 `Collection` interface specification.

 The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if
 the collection being implemented admits a more efficient implementation.

 This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements in this collection

**参见**

- Collection

> *Since 1.2*
