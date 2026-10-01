---
id: "java-en-function-x509certificate-getversion"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getVersion"
signature: "public abstract int getVersion()"
title: "X509Certificate.getVersion"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getVersion

```java
public abstract int getVersion()
```

Gets the `version` (version number) value from the
 certificate.
 The ASN.1 definition for this is:
 
```

 version  [0] EXPLICIT Version DEFAULT v1

 Version ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
 
```

**返回**

- the version number, i.e. 1, 2 or 3.
