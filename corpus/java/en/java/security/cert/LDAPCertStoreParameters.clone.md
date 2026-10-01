---
id: "java-en-function-ldapcertstoreparameters-clone"
language: "java"
lang: "en"
category: "function"
name: "LDAPCertStoreParameters.clone"
signature: "public Object clone()"
title: "LDAPCertStoreParameters.clone"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/LDAPCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LDAPCertStoreParameters.clone

```java
public Object clone()
```

Returns a copy of this object. Changes to the copy will not affect
 the original and vice versa.
 

 Note: this method currently performs a shallow copy of the object
 (simply calls `Object.clone()`). This may be changed in a
 future revision to perform a deep copy if new parameters are added
 that should not be shared.

**返回**

- the copy
