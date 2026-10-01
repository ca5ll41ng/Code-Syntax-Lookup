---
id: "java-en-function-objectinputstream-enableresolveobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.enableResolveObject"
signature: "protected boolean enableResolveObject(boolean enable)"
title: "ObjectInputStream.enableResolveObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.enableResolveObject

```java
protected boolean enableResolveObject(boolean enable)
```

Enables the stream to do replacement of objects read from the stream. When
 enabled, the `resolveObject` method is called for every object being
 deserialized.

**参数**

- **enable** — true for enabling use of `resolveObject` for every object being deserialized

**返回**

- the previous setting before this method was invoked
