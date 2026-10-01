---
id: "java-en-function-sasl-getsaslserverfactories"
language: "java"
lang: "en"
category: "function"
name: "Sasl.getSaslServerFactories"
signature: "public static Enumeration<SaslServerFactory> getSaslServerFactories()"
title: "Sasl.getSaslServerFactories"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.getSaslServerFactories

```java
public static Enumeration<SaslServerFactory> getSaslServerFactories()
```

Gets an enumeration of known factories for producing `SaslServer`.
 This method uses the same algorithm for locating factories as
 `createSaslServer()`.

**返回**

- A non-null enumeration of known factories for producing `SaslServer`.

**参见**

- #createSaslServer
