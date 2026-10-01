---
id: "java-en-function-saslclient-iscomplete"
language: "java"
lang: "en"
category: "function"
name: "SaslClient.isComplete"
signature: "public abstract boolean isComplete()"
title: "SaslClient.isComplete"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClient.isComplete

```java
public abstract boolean isComplete()
```

Determines whether the authentication exchange has completed.
 This method may be called at any time, but typically, it
 will not be called until the caller has received indication
 from the server
 (in a protocol-specific manner) that the exchange has completed.

**返回**

- true if the authentication exchange has completed; false otherwise.
