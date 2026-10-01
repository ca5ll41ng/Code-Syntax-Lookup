---
id: "java-en-function-saslserver-dispose"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.dispose"
signature: "public abstract void dispose() throws SaslException"
title: "SaslServer.dispose"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.dispose

```java
public abstract void dispose() throws SaslException
```

Disposes of any system resources or security-sensitive information
 the SaslServer might be using. Invoking this method invalidates
 the SaslServer instance. This method is idempotent.

**异常**

- **SaslException** — If a problem was encountered while disposing the resources.
