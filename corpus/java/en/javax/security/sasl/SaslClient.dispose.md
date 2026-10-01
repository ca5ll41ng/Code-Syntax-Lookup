---
id: "java-en-function-saslclient-dispose"
language: "java"
lang: "en"
category: "function"
name: "SaslClient.dispose"
signature: "public abstract void dispose() throws SaslException"
title: "SaslClient.dispose"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClient.dispose

```java
public abstract void dispose() throws SaslException
```

Disposes of any system resources or security-sensitive information
 the SaslClient might be using. Invoking this method invalidates
 the SaslClient instance. This method is idempotent.

**异常**

- **SaslException** — If a problem was encountered while disposing the resources.
