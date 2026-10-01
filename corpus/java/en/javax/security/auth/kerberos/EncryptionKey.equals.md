---
id: "java-en-function-encryptionkey-equals"
language: "java"
lang: "en"
category: "function"
name: "EncryptionKey.equals"
signature: "public boolean equals(Object other)"
title: "EncryptionKey.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey.equals

```java
public boolean equals(Object other)
```

Compares the specified object with this key for equality.
 Returns true if the given object is also an
 `EncryptionKey` and the two
 `EncryptionKey` instances are equivalent. More formally two
 `EncryptionKey` instances are equal if they have equal key types
 and key material.
 A destroyed `EncryptionKey` object is only equal to itself.

**参数**

- **other** — the object to compare to

**返回**

- true if the specified object is equal to this `EncryptionKey`, false otherwise.
