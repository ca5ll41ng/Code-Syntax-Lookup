---
id: "java-en-function-tabulardatasupport-keyset"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.keySet"
signature: "public Set<Object> keySet()"
title: "TabularDataSupport.keySet"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.keySet

```java
public Set<Object> keySet()
```

Returns a set view of the keys contained in the underlying map of this
 `TabularDataSupport` instance used to index the rows.
 Each key contained in this `Set` is an unmodifiable `List<?>`
 so the returned set view is a `Set
- >` but is declared as a
 `Set` for compatibility reasons.
 The set is backed by the underlying map of this
 `TabularDataSupport` instance, so changes to the
 `TabularDataSupport` instance are reflected in the
 set, and vice-versa.

 The set supports element removal, which removes the corresponding
 row from this `TabularDataSupport` instance, via the
 `remove`, `remove`, `removeAll`,
 `retainAll`, and `clear` operations. It does
  not support the `add` or `addAll` operations.

**返回**

- a set view (`Set - >`) of the keys used to index the rows of this `TabularDataSupport` instance.
