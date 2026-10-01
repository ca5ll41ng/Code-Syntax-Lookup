---
id: "java-en-function-cipheroutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "CipherOutputStream.flush"
signature: "public void flush() throws IOException"
title: "CipherOutputStream.flush"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherOutputStream.flush

```java
public void flush() throws IOException
```

Flushes this output stream by forcing any buffered output bytes
 that have already been processed by the encapsulated `Cipher`
 object to be written out.

 

Any bytes buffered by the encapsulated `Cipher` object
 and waiting to be processed by it will not be written out. For example,
 if the encapsulated `Cipher` object is a block cipher, and the
 total number of bytes written using one of the `write`
 methods is less than the cipher's block size, no bytes will be written
 out.

**异常**

- **IOException** — if an I/O error occurs.
