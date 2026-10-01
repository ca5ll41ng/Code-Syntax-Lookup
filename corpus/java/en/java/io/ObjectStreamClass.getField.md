---
id: "java-en-function-objectstreamclass-getfield"
language: "java"
lang: "en"
category: "function"
name: "ObjectStreamClass.getField"
signature: "public ObjectStreamField getField(String name)"
title: "ObjectStreamClass.getField"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamClass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamClass.getField

```java
public ObjectStreamField getField(String name)
```

Get the field of this class by name.

**参数**

- **name** — the name of the data field to look for

**返回**

- The ObjectStreamField object of the named field or null if there is no such named field.
