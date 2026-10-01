---
id: "java-en-function-tabulardata-keyset"
language: "java"
lang: "en"
category: "function"
name: "TabularData.keySet"
signature: "public Set<?> keySet()"
title: "TabularData.keySet"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.keySet

```java
public Set<?> keySet()
```

Returns a set view of the keys (ie the index values) of the
 `CompositeData` values (ie the rows) contained in this
 `TabularData` instance. The returned `Set` is a
 `Set
- >` but is declared as a `Set<?>` for
 compatibility reasons. The returned set can be used to iterate
 over the keys.

**返回**

- a set view (`Set - >`) of the index values used in this `TabularData` instance.
