---
id: "java-en-function-javax-security-auth-kerberos-encryptionkey"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.EncryptionKey"
title: "EncryptionKey"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey

This class encapsulates an EncryptionKey used in Kerberos.

 An EncryptionKey is defined in Section 4.2.9 of the Kerberos Protocol
 Specification (RFC 4120) as:
 
```

     EncryptionKey   ::= SEQUENCE {
             keytype         [0] Int32 -- actually encryption type --,
             keyvalue        [1] OCTET STRING
     }
 
```

 The key material of an `EncryptionKey` is defined as the value
 of the `keyValue` above.

> *Since 9*
