---
id: "java-en-function-messagedigest-digest"
language: "java"
lang: "en"
category: "function"
name: "MessageDigest.digest"
signature: "public byte[] digest()"
title: "MessageDigest.digest"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigest.digest

```java
public byte[] digest()
```

Completes the hash computation by performing final operations
 such as padding. The digest is reset after this call is made.

**返回**

- the array of bytes for the resulting hash value.
