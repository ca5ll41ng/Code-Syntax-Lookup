---
id: "java-en-function-java-util-sequencedcollection"
language: "java"
lang: "en"
category: "function"
name: "java.util.SequencedCollection"
title: "SequencedCollection"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedCollection

A collection that has a well-defined encounter order, that supports operations at both ends,
 and that is reversible. The elements of a sequenced collection have an 
 encounter order, where conceptually the elements have a linear arrangement
 from the first element to the last element. Given any two elements, one element is
 either before (closer to the first element) or after (closer to the last element)
 the other element.
 

 (Note that this definition does not imply anything about physical positioning
 of elements, such as their locations in a computer's memory.)
 

 Several methods inherited from the `Collection` interface are required to operate
 on elements according to this collection's encounter order. For instance, the
 `iterator iterator` method provides elements starting from the first element,
 proceeding through successive elements, until the last element. Other methods that are
 required to operate on elements in encounter order include the following:
 `forEach forEach`, `parallelStream parallelStream`,
 `spliterator spliterator`, `stream stream`,
 and all overloads of the `toArray toArray` method.
 

 This interface provides methods to add, retrieve, and remove elements at either end
 of the collection.
 

 This interface also defines the `reversed reversed` method, which provides
 a reverse-ordered view of this collection.
 In the reverse-ordered view, the concepts of first and last are inverted, as are
 the concepts of successor and predecessor. The first element of this collection is
 the last element of the reverse-ordered view, and vice-versa. The successor of some
 element in this collection is its predecessor in the reversed view, and vice-versa. All
 methods that respect the encounter order of the collection operate as if the encounter order
 is inverted. For instance, the `iterator` method of the reversed view reports the
 elements in order from the last element of this collection to the first. The availability of
 the `reversed` method, and its impact on the ordering semantics of all applicable
 methods, allow convenient iteration, searching, copying, and streaming of the elements of
 this collection in either forward order or reverse order.
 

 This class is a member of the
 
 Java Collections Framework.

 This interface does not impose any requirements on the `equals` and `hashCode`
 methods, because requirements imposed by sub-interfaces `List` and `SequencedSet`
 (which inherits requirements from `Set`) would be in conflict. See the specifications for
 `equals Collection.equals` and `hashCode Collection.hashCode`
 for further information.

**参数**

- **the** — type of elements in this collection

> *Since 21*
