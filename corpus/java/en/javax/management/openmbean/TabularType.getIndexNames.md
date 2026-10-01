---
id: "java-en-function-tabulartype-getindexnames"
language: "java"
lang: "en"
category: "function"
name: "TabularType.getIndexNames"
signature: "public List<String> getIndexNames()"
title: "TabularType.getIndexNames"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.getIndexNames

```java
public List<String> getIndexNames()
```

Returns, in the same order as was given to this instance's
 constructor, an unmodifiable List of the names of the items the
 values of which are used to uniquely index each row element of
 tabular data values described by this TabularType
 instance.

**返回**

- a List of String representing the names of the index items.
