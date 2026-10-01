---
id: "java-en-function-cipherinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "CipherInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "CipherInputStream.skip"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CipherInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CipherInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips `n` bytes of input from the bytes that can be read
 from this input stream without blocking.

 

Fewer bytes than requested might be skipped.
 The actual number of bytes skipped is equal to `n` or
 the result of a call to
 `available() available`,
 whichever is smaller.
 If `n` is less than zero, no bytes are skipped.

 

The actual number of bytes skipped is returned.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if an I/O error occurs.
