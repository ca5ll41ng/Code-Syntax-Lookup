---
id: "java-en-function-x509certificate-getsubjectuniqueid"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSubjectUniqueID"
signature: "public abstract boolean[] getSubjectUniqueID()"
title: "X509Certificate.getSubjectUniqueID"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSubjectUniqueID

```java
public abstract boolean[] getSubjectUniqueID()
```

Gets the `subjectUniqueID` value from the certificate.

 

The ASN.1 definition for this is:
 
```

 subjectUniqueID  [2]  IMPLICIT UniqueIdentifier OPTIONAL

 UniqueIdentifier  ::=  BIT STRING
 
```

**返回**

- the subject unique identifier or null if it is not present in the certificate.
