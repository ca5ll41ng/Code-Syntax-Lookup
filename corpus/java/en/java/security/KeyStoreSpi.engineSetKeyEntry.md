---
id: "java-en-function-keystorespi-enginesetkeyentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineSetKeyEntry"
signature: "public abstract void engineSetKeyEntry(String alias, Key key, char[] password, Certificate[] chain) throws KeyStoreException"
title: "KeyStoreSpi.engineSetKeyEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineSetKeyEntry

```java
public abstract void engineSetKeyEntry(String alias, Key key, char[] password, Certificate[] chain) throws KeyStoreException
```

Assigns the given key to the given alias, protecting it with the given
 password.

 

If the given key is of type `java.security.PrivateKey`,
 it must be accompanied by a certificate chain certifying the
 corresponding public key.

 

If the given alias already exists, the keystore information
 associated with it is overridden by the given key (and possibly
 certificate chain).

**参数**

- **alias** — the alias name
- **key** — the key to be associated with the alias
- **password** — the password to protect the key
- **chain** — the certificate chain for the corresponding public key (only required if the given key is of type `java.security.PrivateKey`).

**异常**

- **KeyStoreException** — if the given key cannot be protected, or this operation fails for some other reason
