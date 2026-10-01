---
id: "java-en-function-x509certificate-getsigalgname"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSigAlgName"
signature: "public abstract String getSigAlgName()"
title: "X509Certificate.getSigAlgName"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSigAlgName

```java
public abstract String getSigAlgName()
```

Gets the signature algorithm name for the certificate
 signature algorithm. An example is the string "SHA256withRSA".
 The ASN.1 definition for this is:
 
```

 signatureAlgorithm   AlgorithmIdentifier

 AlgorithmIdentifier  ::=  SEQUENCE  {
     algorithm               OBJECT IDENTIFIER,
     parameters              ANY DEFINED BY algorithm OPTIONAL  }
                             -- contains a value of the type
                             -- registered for use with the
                             -- algorithm object identifier value
 
```

 

The algorithm name is determined from the `algorithm`
 OID string.

**返回**

- the signature algorithm name.
