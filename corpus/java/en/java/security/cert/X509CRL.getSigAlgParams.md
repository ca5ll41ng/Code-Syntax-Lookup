---
id: "java-en-function-x509crl-getsigalgparams"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getSigAlgParams"
signature: "public abstract byte[] getSigAlgParams()"
title: "X509CRL.getSigAlgParams"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getSigAlgParams

```java
public abstract byte[] getSigAlgParams()
```

Gets the DER-encoded signature algorithm parameters from this
 CRL's signature algorithm. In most cases, the signature
 algorithm parameters are null; the parameters are usually
 supplied with the public key.
 If access to individual parameter values is needed then use
 `java.security.AlgorithmParameters AlgorithmParameters`
 and instantiate with the name returned by
 `getSigAlgName() getSigAlgName`.

 

See `getSigAlgName() getSigAlgName` for
 relevant ASN.1 definitions.

**返回**

- the DER-encoded signature algorithm parameters, or null if no parameters are present.
