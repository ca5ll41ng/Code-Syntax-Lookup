---
id: "java-en-function-context-security_credentials"
language: "java"
lang: "en"
category: "function"
name: "Context.SECURITY_CREDENTIALS"
signature: "String SECURITY_CREDENTIALS = \"java.naming.security.credentials\""
title: "Context.SECURITY_CREDENTIALS"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.SECURITY_CREDENTIALS

```java
String SECURITY_CREDENTIALS = "java.naming.security.credentials"
```

Constant that holds the name of the environment property for
 specifying the credentials of the principal for authenticating
 the caller to the service. The value of the property depends
 on the authentication scheme. For example, it could be a hashed
 password, clear-text password, key, certificate, and so on.
 If this property is unspecified,
 the behaviour is determined by the service provider.

 

 The value of this constant is "java.naming.security.credentials".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
