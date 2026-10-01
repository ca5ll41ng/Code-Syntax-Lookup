---
id: "java-en-function-context-security_authentication"
language: "java"
lang: "en"
category: "function"
name: "Context.SECURITY_AUTHENTICATION"
signature: "String SECURITY_AUTHENTICATION = \"java.naming.security.authentication\""
title: "Context.SECURITY_AUTHENTICATION"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.SECURITY_AUTHENTICATION

```java
String SECURITY_AUTHENTICATION = "java.naming.security.authentication"
```

Constant that holds the name of the environment property for
 specifying the security level to use.
 Its value is one of the following strings:
 "none", "simple", "strong".
 If this property is unspecified,
 the behaviour is determined by the service provider.

 

 The value of this constant is "java.naming.security.authentication".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
