---
id: "java-en-function-objectstreamclass-lookupany"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamClass.lookupAny"
signature: "public static ObjectStreamClass lookupAny(Class<?> cl)"
title: "ObjectStreamClass.lookupAny"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamClass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamClass.lookupAny

```java
public static ObjectStreamClass lookupAny(Class<?> cl)
```

Returns the descriptor for any class, regardless of whether it
 implements `Serializable`.

**参数**

- **cl** — class for which to get the descriptor

**返回**

- the class descriptor for the specified class

> *Since 1.6*
