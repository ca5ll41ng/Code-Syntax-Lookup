---
id: "java-en-function-uuid-nameuuidfrombytes"
language: "java"
lang: "en"
category: "function"
name: "UUID.nameUUIDFromBytes"
signature: "public static UUID nameUUIDFromBytes(byte[] name)"
title: "UUID.nameUUIDFromBytes"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.nameUUIDFromBytes

```java
public static UUID nameUUIDFromBytes(byte[] name)
```

Static factory to retrieve a type 3 (name based) `UUID` based on
 the specified byte array.

**参数**

- **name** — A byte array to be used to construct a `UUID`

**返回**

- A `UUID` generated from the specified array
