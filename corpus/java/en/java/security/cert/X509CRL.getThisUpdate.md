---
id: "java-en-function-x509crl-getthisupdate"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getThisUpdate"
signature: "public abstract Date getThisUpdate()"
title: "X509CRL.getThisUpdate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getThisUpdate

```java
public abstract Date getThisUpdate()
```

Gets the `thisUpdate` date from the CRL.
 The ASN.1 definition for this is:
 
```

 thisUpdate   ChoiceOfTime
 ChoiceOfTime ::= CHOICE {
     utcTime        UTCTime,
     generalTime    GeneralizedTime }
 
```

**返回**

- the `thisUpdate` date from the CRL.
