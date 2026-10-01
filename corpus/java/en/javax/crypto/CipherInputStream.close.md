---
id: "java-en-function-cipherinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "CipherInputStream.close"
signature: "public void close() throws IOException"
title: "CipherInputStream.close"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream.close

```java
public void close() throws IOException
```

Closes this input stream and releases any system resources
 associated with the stream.
 

 The `close` method of `CipherInputStream`
 calls the `close` method of its underlying input
 stream.

**异常**

- **IOException** — if an I/O error occurs.
