---
id: "java-en-function-messagedigestspi-enginedigest"
language: "java"
lang: "en"
category: "function"
name: "MessageDigestSpi.engineDigest"
signature: "protected abstract byte[] engineDigest()"
title: "MessageDigestSpi.engineDigest"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigestSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigestSpi.engineDigest

```java
protected abstract byte[] engineDigest()
```

Completes the hash computation by performing final
 operations such as padding. Once `engineDigest` has
 been called, the engine should be reset (see
 `engineReset() engineReset`).
 Resetting is the responsibility of the
 engine implementor.

**返回**

- the array of bytes for the resulting hash value.
