---
id: "java-en-function-xecprivatekey-getscalar"
language: "java"
lang: "en"
category: "function"
name: "XECPrivateKey.getScalar"
signature: "Optional<byte[]> getScalar()"
title: "XECPrivateKey.getScalar"
directive: "method"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/XECPrivateKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPrivateKey.getScalar

```java
Optional<byte[]> getScalar()
```

Get the scalar value encoded as an unpruned byte array. A new copy of
 the array is returned each time this method is called.

**返回**

- the unpruned encoded scalar value, or an empty Optional if the scalar cannot be extracted (e.g. if the provider is a hardware token and the private key is not allowed to leave the crypto boundary).
