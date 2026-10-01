---
id: "java-en-function-cipherinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "CipherInputStream.available"
signature: "public int available() throws IOException"
title: "CipherInputStream.available"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream.available

```java
public int available() throws IOException
```

Returns the number of bytes that can be read from this input
 stream without blocking. The `available` method of
 `InputStream` returns `0`. This method
 **should** be overridden by subclasses.

**返回**

- the number of bytes that can be read from this input stream without blocking.

**异常**

- **IOException** — if an I/O error occurs.
