---
id: "java-en-function-keystorespi-enginegetentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetEntry"
signature: "public KeyStore.Entry engineGetEntry(String alias, KeyStore.ProtectionParameter protParam) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableEntryException"
title: "KeyStoreSpi.engineGetEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetEntry

```java
public KeyStore.Entry engineGetEntry(String alias, KeyStore.ProtectionParameter protParam) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableEntryException
```

Gets a `KeyStore.Entry` for the specified alias
 with the specified protection parameter.

**参数**

- **alias** — get the `KeyStore.Entry` for this alias
- **protParam** — the `ProtectionParameter` used to protect the `Entry`, which may be `null`

**返回**

- the `KeyStore.Entry` for the specified alias, or `null` if there is no such entry

**异常**

- **KeyStoreException** — if the operation failed
- **NoSuchAlgorithmException** — if the algorithm for recovering the entry cannot be found
- **UnrecoverableEntryException** — if the specified `protParam` were insufficient or invalid
- **UnrecoverableKeyException** — if the entry is a `PrivateKeyEntry` or `SecretKeyEntry` and the specified `protParam` does not contain the information needed to recover the key (e.g. wrong password)

> *Since 1.5*
