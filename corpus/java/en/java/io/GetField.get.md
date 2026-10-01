---
id: "java-en-function-getfield-get"
language: "java"
lang: "en"
category: "function"
name: "GetField.get"
signature: "public abstract boolean get(String name, boolean val) throws IOException"
title: "GetField.get"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GetField.get

```java
public abstract boolean get(String name, boolean val) throws IOException
```

Get the value of the named boolean field from the persistent field.

**参数**

- **name** — the name of the field
- **val** — the default value to use if `name` does not have a value

**返回**

- the value of the named `boolean` field

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`
- **IllegalArgumentException** — if type of `name` is not serializable or if the field type is incorrect
