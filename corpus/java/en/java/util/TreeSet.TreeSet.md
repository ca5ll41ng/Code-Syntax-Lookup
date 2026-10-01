---
id: "java-en-function-treeset-treeset"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.TreeSet"
signature: "public TreeSet()"
title: "TreeSet.TreeSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.TreeSet

```java
public TreeSet()
```

Constructs a new, empty tree set, sorted according to the
 natural ordering of its elements.  All elements inserted into
 the set must implement the `Comparable` interface.
 Furthermore, all such elements must be mutually
 comparable: `e1.compareTo(e2)` must not throw a
 `ClassCastException` for any elements `e1` and
 `e2` in the set.  If the user attempts to add an element
 to the set that violates this constraint (for example, the user
 attempts to add a string element to a set whose elements are
 integers), the `add` call will throw a
 `ClassCastException`.
