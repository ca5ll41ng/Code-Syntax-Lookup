---
id: "java-en-function-tabulardatasupport-clone"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.clone"
signature: "public Object clone()"
title: "TabularDataSupport.clone"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.clone

```java
public Object clone()
```

Returns a clone of this `TabularDataSupport` instance:
 the clone is obtained by calling `super.clone()`, and then cloning the underlying map.
 Only a shallow clone of the underlying map is made, i.e.
 no cloning of the indexes and row values is made as they are immutable.
