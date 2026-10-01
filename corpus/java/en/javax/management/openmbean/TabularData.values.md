---
id: "java-en-function-tabulardata-values"
language: "java"
lang: "en"
category: "function"
name: "TabularData.values"
signature: "public Collection<?> values()"
title: "TabularData.values"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.values

```java
public Collection<?> values()
```

Returns a collection view of the `CompositeData` values
 (ie the rows) contained in this `TabularData` instance.
 The returned `Collection` is a `Collection`
 but is declared as a `Collection<?>` for compatibility reasons.
 The returned collection can be used to iterate over the values.

**返回**

- a collection view (`Collection`) of the rows contained in this `TabularData` instance.
