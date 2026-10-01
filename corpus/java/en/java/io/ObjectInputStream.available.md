---
id: "java-en-function-objectinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.available"
signature: "public int available() throws IOException"
title: "ObjectInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.available

```java
public int available() throws IOException
```

Returns the number of bytes that can be read without blocking.

**返回**

- the number of available bytes.

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`
