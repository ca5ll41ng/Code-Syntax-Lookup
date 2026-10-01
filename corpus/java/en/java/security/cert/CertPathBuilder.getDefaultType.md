---
id: "java-en-function-certpathbuilder-getdefaulttype"
language: "java"
lang: "en"
category: "function"
name: "CertPathBuilder.getDefaultType"
signature: "public static final String getDefaultType()"
title: "CertPathBuilder.getDefaultType"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilder.getDefaultType

```java
public static final String getDefaultType()
```

Returns the default `CertPathBuilder` type as specified by
 the `certpathbuilder.type` security property, or the string
 "PKIX" if no such property exists.

 

The default `CertPathBuilder` type can be used by
 applications that do not want to use a hard-coded type when calling one
 of the `getInstance` methods, and want to provide a default
 type in case a user does not specify its own.

 

The default `CertPathBuilder` type can be changed by
 setting the value of the `certpathbuilder.type` security property
 to the desired type.

**返回**

- the default `CertPathBuilder` type as specified by the `certpathbuilder.type` security property, or the string "PKIX" if no such property exists.

**参见**

- java.security.Security security properties
