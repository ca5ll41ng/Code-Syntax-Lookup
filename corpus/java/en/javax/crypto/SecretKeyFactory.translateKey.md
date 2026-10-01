---
id: "java-en-function-secretkeyfactory-translatekey"
language: "java"
lang: "en"
category: "function"
name: "SecretKeyFactory.translateKey"
signature: "public final SecretKey translateKey(SecretKey key) throws InvalidKeyException"
title: "SecretKeyFactory.translateKey"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeyFactory.translateKey

```java
public final SecretKey translateKey(SecretKey key) throws InvalidKeyException
```

Translates a key object, whose provider may be unknown or potentially
 untrusted, into a corresponding key object of this secret key factory.

**参数**

- **key** — the key whose provider is unknown or untrusted

**返回**

- the translated key

**异常**

- **InvalidKeyException** — if the given key cannot be processed by this secret key factory.
