---
id: "java-en-function-serializablepermission-serializablepermission"
language: "java"
lang: "en"
category: "function"
name: "SerializablePermission.SerializablePermission"
signature: "public SerializablePermission(String name)"
title: "SerializablePermission.SerializablePermission"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SerializablePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SerializablePermission.SerializablePermission

```java
public SerializablePermission(String name)
```

Creates a new SerializablePermission with the specified name.
 The name is the symbolic name of the SerializablePermission, such as
 "enableSubstitution", etc.

**参数**

- **name** — the name of the SerializablePermission.

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
