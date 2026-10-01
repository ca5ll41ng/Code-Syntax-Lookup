---
id: "java-en-function-java-util-abstractset"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractSet"
title: "AbstractSet"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSet

This class provides a skeletal implementation of the `Set`
 interface to minimize the effort required to implement this
 interface. 

 The process of implementing a set by extending this class is identical
 to that of implementing a Collection by extending AbstractCollection,
 except that all of the methods and constructors in subclasses of this
 class must obey the additional constraints imposed by the `Set`
 interface (for instance, the add method must not permit addition of
 multiple instances of an object to a set).

 Note that this class does not override any of the implementations from
 the `AbstractCollection` class.  It merely adds implementations
 for `equals` and `hashCode`.

 This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements maintained by this set

**参见**

- Collection
- AbstractCollection
- Set

> *Since 1.2*
