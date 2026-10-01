---
id: "java-en-function-javax-security-auth-kerberos-kerberoskey"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.KerberosKey"
title: "KerberosKey"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey

This class encapsulates a long term secret key for a Kerberos
 principal.

 A `KerberosKey` object includes an EncryptionKey, a
 `KerberosPrincipal` as its owner, and the version number
 of the key.

 An EncryptionKey is defined in Section 4.2.9 of the Kerberos Protocol
 Specification (RFC 4120) as:
 
```

     EncryptionKey   ::= SEQUENCE {
             keytype         [0] Int32 -- actually encryption type --,
             keyvalue        [1] OCTET STRING
     }
 
```

 The key material of a `KerberosKey` is defined as the value
 of the `keyValue` above.

 All Kerberos JAAS login modules that obtain a principal's password and
 generate the secret key from it should use this class.
 Sometimes, such as when authenticating a server in
 the absence of user-to-user authentication, the login module will store
 an instance of this class in the private credential set of a
 `javax.security.auth.Subject Subject` during the commit phase of the
 authentication process.

 A Kerberos service using a keytab to read secret keys should use
 the `KeyTab` class, where latest keys can be read when needed.

 When creating a `KerberosKey` using the
 `KerberosKey` constructor,
 an implementation may accept non-IANA algorithm names (For example,
 "ArcFourMac" for "rc4-hmac"), but the `getAlgorithm` method
 must always return the IANA algorithm name.

 `KerberosKey` constructor in this
 implementation for compatibility reasons, which are "DES" (and null) for
 "des-cbc-md5", "DESede" for "des3-cbc-sha1-kd", "ArcFourHmac" for "rc4-hmac",
 "AES128" for "aes128-cts-hmac-sha1-96", and "AES256" for
 "aes256-cts-hmac-sha1-96".

> *Since 1.4*
