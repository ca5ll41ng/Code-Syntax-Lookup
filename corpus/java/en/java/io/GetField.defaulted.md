---
id: "java-en-function-getfield-defaulted"
language: "java"
lang: "en"
category: "function"
name: "GetField.defaulted"
signature: "public abstract boolean defaulted(String name) throws IOException"
title: "GetField.defaulted"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GetField.defaulted

```java
public abstract boolean defaulted(String name) throws IOException
```

Return true if the named field is defaulted and has no value in this
 stream.

**参数**

- **name** — the name of the field

**返回**

- true, if and only if the named field is defaulted

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`
- **IllegalArgumentException** — if `name` does not correspond to a serializable field
