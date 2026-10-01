---
id: "java-en-function-objectstreamclass-lookup"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamClass.lookup"
signature: "public static ObjectStreamClass lookup(Class<?> cl)"
title: "ObjectStreamClass.lookup"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamClass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamClass.lookup

```java
public static ObjectStreamClass lookup(Class<?> cl)
```

Find the descriptor for a class that can be serialized.  Creates an
 ObjectStreamClass instance if one does not exist yet for class. Null is
 returned if the specified class does not implement java.io.Serializable
 or java.io.Externalizable.

**参数**

- **cl** — class for which to get the descriptor

**返回**

- the class descriptor for the specified class
