---
id: "java-en-function-java-util-sequencedset"
language: "java"
lang: "en"
category: "function"
name: "java.util.SequencedSet"
title: "SequencedSet"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedSet

A collection that is both a `SequencedCollection` and a `Set`. As such,
 it can be thought of either as a `Set` that also has a well-defined
 encounter order, or as a
 `SequencedCollection` that also has unique elements.
 

 This interface has the same requirements on the `equals` and `hashCode`
 methods as defined by `equals Set.equals` and `hashCode Set.hashCode`.
 Thus, a `Set` and a `SequencedSet` will compare equals if and only
 if they have equal elements, irrespective of ordering.
 

 `SequencedSet` defines the `reversed` method, which provides a
 reverse-ordered view of this set. The only difference
 from the `reversed SequencedCollection.reversed` method is
 that the return type of `SequencedSet.reversed` is `SequencedSet`.
 

 This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements in this sequenced set

> *Since 21*
