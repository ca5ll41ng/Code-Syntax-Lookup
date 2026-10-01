---
id: "java-en-function-objectstreamfield-gettype"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamField.getType"
signature: "public Class<?> getType()"
title: "ObjectStreamField.getType"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamField.getType

```java
public Class<?> getType()
```

Get the type of the field.  If the type is non-primitive and this
 `ObjectStreamField` was obtained from a deserialized `ObjectStreamClass` instance, then `Object.class` is returned.
 Otherwise, the `Class` object for the type of the field is
 returned.

**返回**

- a `Class` object representing the type of the serializable field
