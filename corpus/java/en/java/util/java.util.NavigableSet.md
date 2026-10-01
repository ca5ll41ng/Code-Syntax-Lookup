---
id: "java-en-function-java-util-navigableset"
language: "java"
lang: "en"
category: "function"
name: "java.util.NavigableSet"
title: "NavigableSet"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet

A `SortedSet` extended with navigation methods reporting
 closest matches for given search targets. Methods `lower`,
 `floor`, `ceiling`, and `higher` return elements
 respectively less than, less than or equal, greater than or equal,
 and greater than a given element, returning `null` if there
 is no such element.

 

A `NavigableSet` may be accessed and traversed in either
 ascending or descending order.  The `descendingSet` method
 returns a view of the set with the senses of all relational and
 directional methods inverted. The performance of ascending
 operations and views is likely to be faster than that of descending
 ones.  This interface additionally defines methods `pollFirst` and `pollLast` that return and remove the lowest
 and highest element, if one exists, else returning `null`.
 Methods
 `subSet`,
 `headSet`, and
 `tailSet`
 differ from the like-named `SortedSet` methods in accepting
 additional arguments describing whether lower and upper bounds are
 inclusive versus exclusive.  Subsets of any `NavigableSet`
 must implement the `NavigableSet` interface.

 

The return values of navigation methods may be ambiguous in
 implementations that permit `null` elements. However, even
 in this case the result can be disambiguated by checking
 `contains(null)`. To avoid such issues, implementations of
 this interface are encouraged to not permit insertion of
 `null` elements. (Note that sorted sets of `Comparable` elements intrinsically do not permit `null`.)

 

Methods
 `subSet`,
 `headSet`, and
 `tailSet`
 are specified to return `SortedSet` to allow existing
 implementations of `SortedSet` to be compatibly retrofitted to
 implement `NavigableSet`, but extensions and implementations
 of this interface are encouraged to override these methods to return
 `NavigableSet`.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements maintained by this set

> *Since 1.6*
