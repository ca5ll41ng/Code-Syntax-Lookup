---
id: "java-en-function-objectstreamfield-objectstreamfield"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamField.ObjectStreamField"
signature: "public ObjectStreamField(String name, Class<?> type)"
title: "ObjectStreamField.ObjectStreamField"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamField.ObjectStreamField

```java
public ObjectStreamField(String name, Class<?> type)
```

Create a Serializable field with the specified type.  This field should
 be documented with a `serialField` tag.

**参数**

- **name** — the name of the serializable field
- **type** — the `Class` object of the serializable field
