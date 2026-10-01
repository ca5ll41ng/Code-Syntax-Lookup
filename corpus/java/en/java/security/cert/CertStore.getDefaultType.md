---
id: "java-en-function-certstore-getdefaulttype"
language: "java"
lang: "en"
category: "function"
name: "CertStore.getDefaultType"
signature: "public static final String getDefaultType()"
title: "CertStore.getDefaultType"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.getDefaultType

```java
public static final String getDefaultType()
```

Returns the default `CertStore` type as specified by the
 `certstore.type` security property, or the string
 "LDAP" if no such property exists.

 

The default `CertStore` type can be used by applications
 that do not want to use a hard-coded type when calling one of the
 `getInstance` methods, and want to provide a default
 `CertStore` type in case a user does not specify its own.

 

The default `CertStore` type can be changed by setting
 the value of the `certstore.type` security property to the
 desired type.

**返回**

- the default `CertStore` type as specified by the `certstore.type` security property, or the string "LDAP" if no such property exists.

**参见**

- java.security.Security security properties
