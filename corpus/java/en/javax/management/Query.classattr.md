---
id: "java-en-function-query-classattr"
language: "java"
lang: "en"
category: "function"
name: "Query.classattr"
signature: "public static AttributeValueExp classattr()"
title: "Query.classattr"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.classattr

```java
public static AttributeValueExp classattr()
```

Returns a new class attribute expression which can be used in any
 Query call that expects a ValueExp.

 

Evaluating this expression for a given
 objectName includes performing `getObjectInstance
 MBeanServer.getObjectInstance`.

**返回**

- A class attribute expression.  The returned object will be serialized as an instance of the non-public class  javax.management.ClassAttributeValueExp.
