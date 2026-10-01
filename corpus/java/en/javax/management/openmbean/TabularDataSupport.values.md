---
id: "java-en-function-tabulardatasupport-values"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.values"
signature: "public Collection<Object> values()"
title: "TabularDataSupport.values"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.values

```java
public Collection<Object> values()
```

Returns a collection view of the rows contained in this
 `TabularDataSupport` instance. The returned `Collection`
 is a `Collection` but is declared as a
 `Collection` for compatibility reasons.
 The returned collection can be used to iterate over the values.
 The collection is backed by the underlying map, so changes to the
 `TabularDataSupport` instance are reflected in the collection,
 and vice-versa.

 The collection supports element removal, which removes the corresponding
 index to row mapping from this `TabularDataSupport` instance, via
 the `remove`, `remove`,
 `removeAll`, `retainAll`,
 and `clear` operations. It does not support
 the `add` or `addAll` operations.

**返回**

- a collection view (`Collection`) of the values contained in this `TabularDataSupport` instance.
