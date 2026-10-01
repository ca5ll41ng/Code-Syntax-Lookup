---
id: "java-en-function-digestinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "DigestInputStream.read"
signature: "public int read() throws IOException"
title: "DigestInputStream.read"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestInputStream.read

```java
public int read() throws IOException
```

Reads a byte, and updates the message digest (if the digest
 function is on).  That is, this method reads a byte from the
 input stream, blocking until the byte is actually read. If the
 digest function is on (see `on(boolean) on`), this method
 will then call `update` on the message digest associated
 with this stream, passing it the byte read.

**返回**

- the byte read.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- MessageDigest#update(byte)
