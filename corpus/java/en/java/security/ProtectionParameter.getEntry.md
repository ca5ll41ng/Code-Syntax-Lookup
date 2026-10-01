---
id: "java-en-function-protectionparameter-getentry"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getEntry"
signature: "public final Entry getEntry(String alias, ProtectionParameter protParam) throws NoSuchAlgorithmException, UnrecoverableEntryException, KeyStoreException"
title: "ProtectionParameter.getEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getEntry

```java
public final Entry getEntry(String alias, ProtectionParameter protParam) throws NoSuchAlgorithmException, UnrecoverableEntryException, KeyStoreException
```

Gets a keystore `Entry` for the specified alias
 with the specified protection parameter.

**参数**

- **alias** — get the keystore `Entry` for this alias
- **protParam** — the `ProtectionParameter` used to protect the `Entry`, which may be `null`

**返回**

- the keystore `Entry` for the specified alias, or `null` if there is no such entry

**异常**

- **NullPointerException** — if `alias` is `null`
- **NoSuchAlgorithmException** — if the algorithm for recovering the entry cannot be found
- **UnrecoverableEntryException** — if the specified `protParam` were insufficient or invalid
- **UnrecoverableKeyException** — if the entry is a `PrivateKeyEntry` or `SecretKeyEntry` and the specified `protParam` does not contain the information needed to recover the key (e.g. wrong password)
- **KeyStoreException** — if the keystore has not been initialized (loaded).

**参见**

- #setEntry(String, KeyStore.Entry, KeyStore.ProtectionParameter)

> *Since 1.5*
