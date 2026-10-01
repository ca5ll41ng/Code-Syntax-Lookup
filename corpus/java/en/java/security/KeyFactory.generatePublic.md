---
id: "java-en-function-keyfactory-generatepublic"
language: "java"
lang: "en"
category: "function"
name: "KeyFactory.generatePublic"
signature: "public final PublicKey generatePublic(KeySpec keySpec) throws InvalidKeySpecException"
title: "KeyFactory.generatePublic"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactory.generatePublic

```java
public final PublicKey generatePublic(KeySpec keySpec) throws InvalidKeySpecException
```

Generates a public key object from the provided key specification
 (key material).

**参数**

- **keySpec** — the specification (key material) of the public key.

**返回**

- the public key.

**异常**

- **InvalidKeySpecException** — if the given key specification is inappropriate for this key factory to produce a public key.
