---
id: "java-en-function-javax-crypto-secretkey"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.SecretKey"
title: "SecretKey"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKey

A secret (symmetric) key.
 The purpose of this interface is to group (and provide type safety
 for) all secret key interfaces.
 

 Provider implementations of this interface must overwrite the
 `equals` and `hashCode` methods inherited from
 `java.lang.Object`, so that secret keys are compared based on
 their underlying key material and not based on reference.
 Implementations should override the default `destroy` and
 `isDestroyed` methods from the
 `javax.security.auth.Destroyable` interface to enable
 sensitive key information to be destroyed, cleared, or in the case
 where such information is immutable, unreferenced.
 Finally, since `SecretKey` is `Serializable`, implementations
 should also override
 `writeObject`
 to prevent keys that have been destroyed from being serialized.

 

Keys that implement this interface return the string `RAW`
 as their encoding format (see `getFormat`), and return the
 raw key bytes as the result of a `getEncoded` method call. (The
 `getFormat` and `getEncoded` methods are inherited
 from the `java.security.Key` parent interface.)

**参见**

- SecretKeyFactory
- Cipher

> *Since 1.4*
