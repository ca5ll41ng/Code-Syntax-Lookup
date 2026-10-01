---
id: "java-en-function-java-security-privatekey"
language: "java"
lang: "en"
category: "function"
name: "java.security.PrivateKey"
title: "PrivateKey"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivateKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateKey

A private key.
 The purpose of this interface is to group (and provide type safety
 for) all private key interfaces.
 

 Note: The specialized private key interfaces extend this interface.
 See, for example, the `DSAPrivateKey` interface in
 `java.security.interfaces`.
 

 Implementations should override the default `destroy` and
 `isDestroyed` methods from the
 `javax.security.auth.Destroyable` interface to enable
 sensitive key information to be destroyed, cleared, or in the case
 where such information is immutable, unreferenced.
 Finally, since `PrivateKey` is `Serializable`, implementations
 should also override
 `writeObject`
 to prevent keys that have been destroyed from being serialized.

**参见**

- Key
- PublicKey
- java.security.cert.Certificate
- Signature#initVerify
- java.security.interfaces.DSAPrivateKey
- java.security.interfaces.RSAPrivateKey
- java.security.interfaces.RSAPrivateCrtKey

> *Since 1.1*
