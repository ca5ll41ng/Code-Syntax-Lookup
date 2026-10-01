---
id: "java-en-function-constantgroup-aslist"
language: "java"
lang: "en"
category: "function"
name: "ConstantGroup.asList"
signature: "default List<Object> asList()"
title: "ConstantGroup.asList"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantGroup.asList

```java
default List<Object> asList()
```

Create a view on this group as a `List` view.
 Any request for a constant through this view will
 force resolution.

**返回**

- a `List` view on this group which will force resolution
