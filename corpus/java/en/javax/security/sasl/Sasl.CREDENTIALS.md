---
id: "java-en-function-sasl-credentials"
language: "java"
lang: "en"
category: "function"
name: "Sasl.CREDENTIALS"
signature: "public static final String CREDENTIALS = \"javax.security.sasl.credentials\""
title: "Sasl.CREDENTIALS"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.CREDENTIALS

```java
public static final String CREDENTIALS = "javax.security.sasl.credentials"
```

The name of a property that specifies the credentials to use.
 The property contains a mechanism-specific Java credential object.
 Mechanism implementations may examine the value of this property
 to determine whether it is a class that they support.
 The property may be used to supply credentials to a mechanism that
 supports delegated authentication.

 The value of this constant is
 `"javax.security.sasl.credentials"`.
