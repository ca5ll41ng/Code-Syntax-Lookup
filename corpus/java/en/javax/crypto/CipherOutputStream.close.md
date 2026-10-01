---
id: "java-en-function-cipheroutputstream-close"
language: "java"
lang: "en"
category: "function"
name: "CipherOutputStream.close"
signature: "public void close() throws IOException"
title: "CipherOutputStream.close"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherOutputStream.close

```java
public void close() throws IOException
```

Closes this output stream and releases any system resources
 associated with this stream.
 

 This method invokes the `doFinal` method of the encapsulated
 `Cipher` object, which causes any bytes buffered by the
 encapsulated `Cipher` object to be processed. The result is written
 out by calling the `flush` method of this output stream.
 

 This method resets the encapsulated `Cipher` object to its
 initial state and calls the `close` method of the underlying
 output stream.

**异常**

- **IOException** — if an I/O error occurs.
