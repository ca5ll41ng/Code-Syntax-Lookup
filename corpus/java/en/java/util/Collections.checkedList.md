---
id: "java-en-function-collections-checkedlist"
language: "java"
lang: "en"
category: "function"
name: "Collections.checkedList"
signature: "public static <E> List<E> checkedList(List<E> list, Class<E> type)"
title: "Collections.checkedList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.checkedList

```java
public static <E> List<E> checkedList(List<E> list, Class<E> type)
```

Returns a dynamically typesafe view of the specified list.
 Any attempt to insert an element of the wrong type will result in
 an immediate `ClassCastException`.  Assuming a list contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the list
 takes place through the view, it is guaranteed that the
 list cannot contain an incorrectly typed element.

 

A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `checkedCollection
 checkedCollection` method.

 

The returned list will be serializable if the specified list
 is serializable.

 

Since `null` is considered to be a value of any reference
 type, the returned list permits insertion of null elements whenever
 the backing list does.

**参数**

- **the** — class of the objects in the list
- **list** — the list for which a dynamically typesafe view is to be returned
- **type** — the type of element that `list` is permitted to hold

**返回**

- a dynamically typesafe view of the specified list

> *Since 1.5*
