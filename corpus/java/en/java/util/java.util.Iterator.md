---
id: "java-en-function-java-util-iterator"
language: "java"
lang: "en"
category: "function"
name: "java.util.Iterator"
title: "Iterator"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Iterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Iterator

An iterator over a collection.  `Iterator` takes the place of
 `Enumeration` in the Java Collections Framework.  Iterators
 differ from enumerations in two ways:

 
      
-  Iterators allow the caller to remove elements from the
           underlying collection during the iteration with well-defined
           semantics.
      
-  Method names have been improved.
 

 

This interface is a member of the
 
 Java Collections Framework.

 An `Enumeration` can be converted into an `Iterator` by
 using the `asIterator` method.

**参数**

- **the** — type of elements returned by this iterator

**参见**

- Collection
- ListIterator
- Iterable

> *Since 1.2*
