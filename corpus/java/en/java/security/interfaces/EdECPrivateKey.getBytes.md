---
id: "java-en-function-edecprivatekey-getbytes"
language: "java"
lang: "en"
category: "function"
name: "EdECPrivateKey.getBytes"
signature: "Optional<byte[]> getBytes()"
title: "EdECPrivateKey.getBytes"
directive: "method"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/EdECPrivateKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPrivateKey.getBytes

```java
Optional<byte[]> getBytes()
```

Get a copy of the byte array representing the private key. This method
 may return an empty `Optional` if the implementation is not
 willing to produce the private key value.

**返回**

- an `Optional` containing the private key byte array. If the key is not available, then an empty `Optional`.
