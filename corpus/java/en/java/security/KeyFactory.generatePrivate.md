---
id: "java-en-function-keyfactory-generateprivate"
language: "java"
lang: "en"
category: "function"
name: "KeyFactory.generatePrivate"
signature: "public final PrivateKey generatePrivate(KeySpec keySpec) throws InvalidKeySpecException"
title: "KeyFactory.generatePrivate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactory.generatePrivate

```java
public final PrivateKey generatePrivate(KeySpec keySpec) throws InvalidKeySpecException
```

Generates a private key object from the provided key specification
 (key material).

**参数**

- **keySpec** — the specification (key material) of the private key.

**返回**

- the private key.

**异常**

- **InvalidKeySpecException** — if the given key specification is inappropriate for this key factory to produce a private key.
