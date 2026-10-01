---
id: "java-en-function-x509crl-getversion"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getVersion"
signature: "public abstract int getVersion()"
title: "X509CRL.getVersion"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getVersion

```java
public abstract int getVersion()
```

Gets the `version` (version number) value from the CRL.
 The ASN.1 definition for this is:
 
```

 version    Version OPTIONAL,
             -- if present, must be v2

 Version  ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
             -- v3 does not apply to CRLs but appears for consistency
             -- with definition of Version for certs
 
```

**返回**

- the version number, i.e. 1 or 2.
