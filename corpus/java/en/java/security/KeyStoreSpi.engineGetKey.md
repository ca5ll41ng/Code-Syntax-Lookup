---
id: "java-en-function-keystorespi-enginegetkey"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetKey"
signature: "public abstract Key engineGetKey(String alias, char[] password) throws NoSuchAlgorithmException, UnrecoverableKeyException"
title: "KeyStoreSpi.engineGetKey"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetKey

```java
public abstract Key engineGetKey(String alias, char[] password) throws NoSuchAlgorithmException, UnrecoverableKeyException
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

- **NoSuchAlgorithmException** — if the algorithm for recovering the key cannot be found
- **UnrecoverableKeyException** — if the key cannot be recovered (e.g., the given password is wrong).
