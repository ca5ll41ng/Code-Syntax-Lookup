---
id: "java-en-function-saslserver-iscomplete"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.isComplete"
signature: "public abstract boolean isComplete()"
title: "SaslServer.isComplete"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.isComplete

```java
public abstract boolean isComplete()
```

Determines whether the authentication exchange has completed.
 This method is typically called after each invocation of
 `evaluateResponse()` to determine whether the
 authentication has completed successfully or should be continued.

**返回**

- true if the authentication exchange has completed; false otherwise.
