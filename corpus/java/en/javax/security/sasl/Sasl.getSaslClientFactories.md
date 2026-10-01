---
id: "java-en-function-sasl-getsaslclientfactories"
language: "java"
lang: "en"
category: "function"
name: "Sasl.getSaslClientFactories"
signature: "public static Enumeration<SaslClientFactory> getSaslClientFactories()"
title: "Sasl.getSaslClientFactories"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.getSaslClientFactories

```java
public static Enumeration<SaslClientFactory> getSaslClientFactories()
```

Gets an enumeration of known factories for producing `SaslClient`.
 This method uses the same algorithm for locating factories as
 `createSaslClient()`.

**返回**

- A non-null enumeration of known factories for producing `SaslClient`.

**参见**

- #createSaslClient
