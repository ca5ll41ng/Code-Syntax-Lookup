---
id: "java-en-function-x509certificate-getkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getKeyUsage"
signature: "public abstract boolean[] getKeyUsage()"
title: "X509Certificate.getKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getKeyUsage

```java
public abstract boolean[] getKeyUsage()
```

Gets a boolean array representing bits of
 the `KeyUsage` extension, (OID = 2.5.29.15).
 The key usage extension defines the purpose (e.g., encipherment,
 signature, certificate signing) of the key contained in the
 certificate.
 The ASN.1 definition for this is:
 
```

 KeyUsage ::= BIT STRING {
     digitalSignature        (0),
     nonRepudiation          (1),
     keyEncipherment         (2),
     dataEncipherment        (3),
     keyAgreement            (4),
     keyCertSign             (5),
     cRLSign                 (6),
     encipherOnly            (7),
     decipherOnly            (8) }
 
```

 RFC 5280 recommends that when used, this be marked
 as a critical extension.

**返回**

- the KeyUsage extension of this certificate, represented as an array of booleans. The order of KeyUsage values in the array is the same as in the above ASN.1 definition. The array will contain a value for each KeyUsage defined above. If the KeyUsage list encoded in the certificate is longer than the above list, it will not be truncated. Returns null if this certificate does not contain a KeyUsage extension.
