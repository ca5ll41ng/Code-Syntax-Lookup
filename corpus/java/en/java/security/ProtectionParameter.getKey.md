---
id: "java-en-function-protectionparameter-getkey"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getKey"
signature: "public final Key getKey(String alias, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException"
title: "ProtectionParameter.getKey"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getKey

```java
public final Key getKey(String alias, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException
```

Returns the key associated with the given alias, using the given
 password to recover it.  The key must have been associated with
 the alias by a call to `setKeyEntry`,
 or by a call to `setEntry` with a
 `PrivateKeyEntry` or `SecretKeyEntry`.

**参数**

- **alias** — the alias name
- **password** — the password for recovering the key

**返回**

- the requested key, or `null` if the given alias does not exist or does not identify a key-related entry.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
- **NoSuchAlgorithmException** — if the algorithm for recovering the key cannot be found
- **UnrecoverableKeyException** — if the key cannot be recovered (e.g., the given password is wrong).
