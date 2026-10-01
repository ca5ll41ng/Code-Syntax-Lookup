---
id: "java-en-function-digestoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "DigestOutputStream.write"
signature: "public void write(int b) throws IOException"
title: "DigestOutputStream.write"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestOutputStream.write

```java
public void write(int b) throws IOException
```

Updates the message digest (if the digest function is on) using
 the specified byte, and in any case writes the byte
 to the output stream. That is, if the digest function is on
 (see `on(boolean) on`), this method calls
 `update` on the message digest associated with this
 stream, passing it the byte `b`. This method then
 writes the byte to the output stream, blocking until the byte
 is actually written.

**参数**

- **b** — the byte to be used for updating and writing to the output stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- MessageDigest#update(byte)
