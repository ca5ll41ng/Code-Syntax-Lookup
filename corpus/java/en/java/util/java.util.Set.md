---
id: "java-en-function-java-util-set"
language: "java"
lang: "en"
category: "function"
name: "java.util.Set"
title: "Set"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set

A collection that contains no duplicate elements.  More formally, sets
 contain no pair of elements `e1` and `e2` such that
 `e1.equals(e2)`, and at most one null element.  As implied by
 its name, this interface models the mathematical set abstraction.

 

The `Set` interface places additional stipulations, beyond those
 inherited from the `Collection` interface, on the contracts of all
 constructors and on the contracts of the `add`, `equals` and
 `hashCode` methods.  Declarations for other inherited methods are
 also included here for convenience.  (The specifications accompanying these
 declarations have been tailored to the `Set` interface, but they do
 not contain any additional stipulations.)

 

The additional stipulation on constructors is, not surprisingly,
 that all constructors must create a set that contains no duplicate elements
 (as defined above).

 

Note: Great care must be exercised if mutable objects are used as set
 elements.  The behavior of a set is not specified if the value of an object
 is changed in a manner that affects `equals` comparisons while the
 object is an element in the set.  A special case of this prohibition is
 that it is not permissible for a set to contain itself as an element.

 

Some set implementations have restrictions on the elements that
 they may contain.  For example, some implementations prohibit null elements,
 and some have restrictions on the types of their elements.  Attempting to
 add an ineligible element throws an unchecked exception, typically
 `NullPointerException` or `ClassCastException`.  Attempting
 to query the presence of an ineligible element may throw an exception,
 or it may simply return false; some implementations will exhibit the former
 behavior and some will exhibit the latter.  More generally, attempting an
 operation on an ineligible element whose completion would not result in
 the insertion of an ineligible element into the set may throw an
 exception or it may succeed, at the option of the implementation.
 Such exceptions are marked as "optional" in the specification for this
 interface.

 Unmodifiable Sets
 

The `of(Object...) Set.of` and
 `copyOf Set.copyOf` static factory methods
 provide a convenient way to create unmodifiable sets. The `Set`
 instances created by these methods have the following characteristics:

 
 
- They are unmodifiable. Elements cannot
 be added or removed. Calling any mutator method on the Set
 will always cause `UnsupportedOperationException` to be thrown.
 However, if the contained elements are themselves mutable, this may cause the
 Set to behave inconsistently or its contents to appear to change.
 
- They disallow `null` elements. Attempts to create them with
 `null` elements result in `NullPointerException`.
 
- Unless otherwise specified, they are serializable if all elements are serializable.
 
- They reject duplicate elements at creation time. Duplicate elements
 passed to a static factory method result in `IllegalArgumentException`.
 
- The iteration order of set elements is unspecified and is subject to change.
 
- They are value-based.
 Programmers should treat instances that are `equals(Object) equal`
 as interchangeable and should not use them for synchronization, or
 unpredictable behavior may occur. For example, in a future release,
 synchronization may fail. Callers should make no assumptions
 about the identity of the returned instances. Factories are free to
 create new instances or reuse existing ones.
 
- They are serialized as specified on the
 Serialized Form
 page.
 

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements maintained by this set

**参见**

- Collection
- List
- SortedSet
- HashSet
- TreeSet
- AbstractSet
- Collections#singleton(java.lang.Object)
- Collections#EMPTY_SET

> *Since 1.2*
