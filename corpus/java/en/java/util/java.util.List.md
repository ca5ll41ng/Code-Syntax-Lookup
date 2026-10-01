---
id: "java-en-function-java-util-list"
language: "java"
lang: "en"
category: "function"
name: "java.util.List"
title: "List"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List

An ordered collection, where the user has precise control over where in the
 list each element is inserted.  The user can access elements by their integer
 index (position in the list), and search for elements in the list.

 Unlike sets, lists typically allow duplicate elements.  More formally,
 lists typically allow pairs of elements `e1` and `e2`
 such that `e1.equals(e2)`, and they typically allow multiple
 null elements if they allow null elements at all.  It is not inconceivable
 that someone might wish to implement a list that prohibits duplicates, by
 throwing runtime exceptions when the user attempts to insert them, but we
 expect this usage to be rare.

 The `List` interface places additional stipulations, beyond those
 specified in the `Collection` interface, on the contracts of the
 `iterator`, `add`, `remove`, `equals`, and
 `hashCode` methods.  Declarations for other inherited methods are
 also included here for convenience.

 The `List` interface provides four methods for positional (indexed)
 access to list elements.  Lists (like Java arrays) are zero based.  Note
 that these operations may execute in time proportional to the index value
 for some implementations (the `LinkedList` class, for
 example). Thus, iterating over the elements in a list is typically
 preferable to indexing through it if the caller does not know the
 implementation.

 The `List` interface provides a special iterator, called a
 `ListIterator`, that allows element insertion and replacement, and
 bidirectional access in addition to the normal operations that the
 `Iterator` interface provides.  A method is provided to obtain a
 list iterator that starts at a specified position in the list.

 The `List` interface provides two methods to search for a specified
 object.  From a performance standpoint, these methods should be used with
 caution.  In many implementations they will perform costly linear
 searches.

 The `List` interface provides two methods to efficiently insert and
 remove multiple elements at an arbitrary point in the list.

 Note: While it is permissible for lists to contain themselves as elements,
 extreme caution is advised: the `equals` and `hashCode`
 methods are no longer well defined on such a list.

 

Some list implementations have restrictions on the elements that
 they may contain.  For example, some implementations prohibit null elements,
 and some have restrictions on the types of their elements.  Attempting to
 add an ineligible element throws an unchecked exception, typically
 `NullPointerException` or `ClassCastException`.  Attempting
 to query the presence of an ineligible element may throw an exception,
 or it may simply return false; some implementations will exhibit the former
 behavior and some will exhibit the latter.  More generally, attempting an
 operation on an ineligible element whose completion would not result in
 the insertion of an ineligible element into the list may throw an
 exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 Unmodifiable Lists
 

The `of(Object...) List.of`,
 `copyOf List.copyOf`, and `ofLazy` static
 factory methods provide a convenient way to create unmodifiable lists. The `List`
 instances created by these methods have the following characteristics:

 
 
- They are unmodifiable. Elements cannot
 be added, removed, or replaced. Calling any mutator method on the List
 will always cause `UnsupportedOperationException` to be thrown.
 However, if the contained elements are themselves mutable,
 this may cause the List's contents to appear to change.
 
- They disallow `null` elements. Attempts to create them with
 `null` elements result in `NullPointerException`.
 
- Unless otherwise specified, they are serializable if all elements are serializable.
 
- The order of elements in the list is the same as the order of the
 provided arguments, or of the elements in the provided array.
 
- The lists and their `subList(int, int) subList` views implement the
 `RandomAccess` interface.
 
- They are value-based.
 Programmers should treat instances that are `equals(Object) equal`
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions about the
 identity of the returned instances. Factories are free to
 create new instances or reuse existing ones.
 
- They are serialized as specified on the
 Serialized Form
 page.
 

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements in this list

**参见**

- Collection
- Set
- ArrayList
- LinkedList
- Vector
- Arrays#asList(Object[])
- Collections#nCopies(int, Object)
- Collections#EMPTY_LIST
- AbstractList
- AbstractSequentialList

> *Since 1.2*
