---
id: "java-en-function-context-security_principal"
language: "java"
lang: "en"
category: "function"
name: "Context.SECURITY_PRINCIPAL"
signature: "String SECURITY_PRINCIPAL = \"java.naming.security.principal\""
title: "Context.SECURITY_PRINCIPAL"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.SECURITY_PRINCIPAL

```java
String SECURITY_PRINCIPAL = "java.naming.security.principal"
```

Constant that holds the name of the environment property for
 specifying the identity of the principal for authenticating
 the caller to the service. The format of the principal
 depends on the authentication scheme.
 If this property is unspecified,
 the behaviour is determined by the service provider.

 

 The value of this constant is "java.naming.security.principal".

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
