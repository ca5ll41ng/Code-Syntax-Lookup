---
id: "java-en-function-java-util-abstractmap"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractMap"
title: "AbstractMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap

This class provides a skeletal implementation of the `Map`
 interface, to minimize the effort required to implement this interface.

 

To implement an unmodifiable map, the programmer needs only to extend this
 class and provide an implementation for the `entrySet` method, which
 returns a set-view of the map's mappings.  Typically, the returned set
 will, in turn, be implemented atop `AbstractSet`.  This set should
 not support the `add` or `remove` methods, and its iterator
 should not support the `remove` method.

 

To implement a modifiable map, the programmer must additionally override
 this class's `put` method (which otherwise throws an
 `UnsupportedOperationException`), and the iterator returned by
 `entrySet().iterator()` must additionally implement its
 `remove` method.

 

The programmer should generally provide a void (no argument) and map
 constructor, as per the recommendation in the `Map` interface
 specification.

 

The documentation for each non-abstract method in this class describes its
 implementation in detail.  Each of these methods may be overridden if the
 map being implemented admits a more efficient implementation.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

**参见**

- Map
- Collection

> *Since 1.2*
