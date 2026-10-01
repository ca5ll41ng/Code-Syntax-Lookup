---
id: "java-en-function-query-attr"
language: "java"
lang: "en"
category: "function"
name: "Query.attr"
signature: "public static AttributeValueExp attr(String name)"
title: "Query.attr"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.attr

```java
public static AttributeValueExp attr(String name)
```

Returns a new attribute expression.  See `AttributeValueExp`
 for a detailed description of the semantics of the expression.

 

Evaluating this expression for a given
 objectName includes performing `getAttribute MBeanServer.getAttribute(objectName,
 name)`.

**参数**

- **name** — The name of the attribute.

**返回**

- An attribute expression for the attribute named `name`.
