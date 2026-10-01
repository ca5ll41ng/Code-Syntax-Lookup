---
id: "java-en-function-putfield-put"
language: "java"
lang: "en"
category: "function"
name: "PutField.put"
signature: "public abstract void put(String name, boolean val)"
title: "PutField.put"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PutField.put

```java
public abstract void put(String name, boolean val)
```

Put the value of the named boolean field into the persistent field.

**参数**

- **name** — the name of the serializable field
- **val** — the value to assign to the field

**异常**

- **IllegalArgumentException** — if `name` does not match the name of a serializable field for the class whose fields are being written, or if the type of the named field is not `boolean`
