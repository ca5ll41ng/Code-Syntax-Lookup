---
id: "java-en-function-collections-checkedset"
language: "java"
lang: "en"
category: "function"
name: "Collections.checkedSet"
signature: "public static <E> Set<E> checkedSet(Set<E> s, Class<E> type)"
title: "Collections.checkedSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.checkedSet

```java
public static <E> Set<E> checkedSet(Set<E> s, Class<E> type)
```

Returns a dynamically typesafe view of the specified set.
 Any attempt to insert an element of the wrong type will result in
 an immediate `ClassCastException`.  Assuming a set contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the set
 takes place through the view, it is guaranteed that the
 set cannot contain an incorrectly typed element.

 

A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `checkedCollection
 checkedCollection` method.

 

The returned set will be serializable if the specified set is
 serializable.

 

Since `null` is considered to be a value of any reference
 type, the returned set permits insertion of null elements whenever
 the backing set does.

**参数**

- **the** — class of the objects in the set
- **s** — the set for which a dynamically typesafe view is to be returned
- **type** — the type of element that `s` is permitted to hold

**返回**

- a dynamically typesafe view of the specified set

> *Since 1.5*
