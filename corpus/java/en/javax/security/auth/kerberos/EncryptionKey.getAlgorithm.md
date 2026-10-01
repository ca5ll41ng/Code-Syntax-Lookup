---
id: "java-en-function-encryptionkey-getalgorithm"
language: "java"
lang: "en"
category: "function"
name: "EncryptionKey.getAlgorithm"
signature: "public String getAlgorithm()"
title: "EncryptionKey.getAlgorithm"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey.getAlgorithm

```java
public String getAlgorithm()
```

Returns the standard algorithm name for this key. The algorithm names
 are the encryption type string defined on the IANA
 Kerberos Encryption Type Numbers
 page.
 

 This method can return the following value not defined on the IANA page:
 
     
- none: for etype equal to 0
     
- unknown: for etype greater than 0 but unsupported by
         the implementation
     
- private: for etype smaller than 0

**返回**

- the name of the algorithm associated with this key.

**异常**

- **IllegalStateException** — if the key is destroyed
