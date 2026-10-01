---
id: "java-en-function-saslclient-hasinitialresponse"
language: "java"
lang: "en"
category: "function"
name: "SaslClient.hasInitialResponse"
signature: "public abstract boolean hasInitialResponse()"
title: "SaslClient.hasInitialResponse"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClient.hasInitialResponse

```java
public abstract boolean hasInitialResponse()
```

Determines whether this mechanism has an optional initial response.
 If true, caller should call `evaluateChallenge()` with an
 empty array to get the initial response.

**返回**

- true if this mechanism has an initial response.
