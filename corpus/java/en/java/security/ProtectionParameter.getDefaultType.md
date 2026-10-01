---
id: "java-en-function-protectionparameter-getdefaulttype"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getDefaultType"
signature: "public static final String getDefaultType()"
title: "ProtectionParameter.getDefaultType"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getDefaultType

```java
public static final String getDefaultType()
```

Returns the default keystore type as specified by the
 `keystore.type` security property, or the string
 "pkcs12" if no such property exists.

 

The default keystore type can be used by applications that do not
 want to use a hard-coded keystore type when calling one of the
 `getInstance` methods, and want to provide a default keystore
 type in case a user does not specify its own.

 

The default keystore type can be changed by setting the value of the
 `keystore.type` security property to the desired keystore type.

**返回**

- the default keystore type as specified by the `keystore.type` security property, or the string "pkcs12" if no such property exists.

**参见**

- java.security.Security security properties
