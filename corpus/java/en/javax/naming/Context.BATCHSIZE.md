---
id: "java-en-function-context-batchsize"
language: "java"
lang: "en"
category: "function"
name: "Context.BATCHSIZE"
signature: "String BATCHSIZE = \"java.naming.batchsize\""
title: "Context.BATCHSIZE"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.BATCHSIZE

```java
String BATCHSIZE = "java.naming.batchsize"
```

Constant that holds the name of the environment property for
 specifying the batch size to use when returning data via the
 service's protocol. This is a hint to the provider to return
 the results of operations in batches of the specified size, so
 the provider can optimize its performance and usage of resources.
 The value of the property is the string representation of an
 integer.
 If unspecified, the batch size is determined by the service
 provider.

 

 The value of this constant is "java.naming.batchsize".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
