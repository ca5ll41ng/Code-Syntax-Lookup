---
id: "java-en-function-collections-checkedcollection"
language: "java"
lang: "en"
category: "function"
name: "Collections.checkedCollection"
signature: "public static <E> Collection<E> checkedCollection(Collection<E> c, Class<E> type)"
title: "Collections.checkedCollection"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.checkedCollection

```java
public static <E> Collection<E> checkedCollection(Collection<E> c, Class<E> type)
```

Returns a dynamically typesafe view of the specified collection.
 Any attempt to insert an element of the wrong type will result in an
 immediate `ClassCastException`.  Assuming a collection
 contains no incorrectly typed elements prior to the time a
 dynamically typesafe view is generated, and that all subsequent
 access to the collection takes place through the view, it is
 guaranteed that the collection cannot contain an incorrectly
 typed element.

 

The generics mechanism in the language provides compile-time
 (static) type checking, but it is possible to defeat this mechanism
 with unchecked casts.  Usually this is not a problem, as the compiler
 issues warnings on all such unchecked operations.  There are, however,
 times when static type checking alone is not sufficient.  For example,
 suppose a collection is passed to a third-party library and it is
 imperative that the library code not corrupt the collection by
 inserting an element of the wrong type.

 

Another use of dynamically typesafe views is debugging.  Suppose a
 program fails with a `ClassCastException`, indicating that an
 incorrectly typed element was put into a parameterized collection.
 Unfortunately, the exception can occur at any time after the erroneous
 element is inserted, so it typically provides little or no information
 as to the real source of the problem.  If the problem is reproducible,
 one can quickly determine its source by temporarily modifying the
 program to wrap the collection with a dynamically typesafe view.
 For example, this declaration:
  
```
 `Collection c = new HashSet<>();
 `
```

 may be replaced temporarily by this one:
  
```
 `Collection c = Collections.checkedCollection(
         new HashSet<>(), String.class);
 `
```

 Running the program again will cause it to fail at the point where
 an incorrectly typed element is inserted into the collection, clearly
 identifying the source of the problem.  Once the problem is fixed, the
 modified declaration may be reverted back to the original.

 

The returned collection does not pass the hashCode and equals
 operations through to the backing collection, but relies on
 `Object`'s `equals` and `hashCode` methods.  This
 is necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.

 

The returned collection will be serializable if the specified
 collection is serializable.

 

Since `null` is considered to be a value of any reference
 type, the returned collection permits insertion of null elements
 whenever the backing collection does.

**参数**

- **the** — class of the objects in the collection
- **c** — the collection for which a dynamically typesafe view is to be returned
- **type** — the type of element that `c` is permitted to hold

**返回**

- a dynamically typesafe view of the specified collection

> *Since 1.5*
