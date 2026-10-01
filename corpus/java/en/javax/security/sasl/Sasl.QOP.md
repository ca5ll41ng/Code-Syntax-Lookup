---
id: "java-en-function-sasl-qop"
language: "java"
lang: "en"
category: "function"
name: "Sasl.QOP"
signature: "public static final String QOP = \"javax.security.sasl.qop\""
title: "Sasl.QOP"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.QOP

```java
public static final String QOP = "javax.security.sasl.qop"
```

The name of a property that specifies the quality-of-protection to use.
 The property contains a comma-separated, ordered list
 of quality-of-protection values that the
 client or server is willing to support.  A qop value is one of
 
 
- `"auth"` - authentication only
 
- `"auth-int"` - authentication plus integrity protection
 
- `"auth-conf"` - authentication plus integrity and confidentiality
 protection
 

 The order of the list specifies the preference order of the client or
 server. If this property is absent, the default qop is `"auth"`.
 The value of this constant is `"javax.security.sasl.qop"`.
