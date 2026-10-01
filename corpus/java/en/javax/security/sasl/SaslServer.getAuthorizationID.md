---
id: "java-en-function-saslserver-getauthorizationid"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.getAuthorizationID"
signature: "public String getAuthorizationID()"
title: "SaslServer.getAuthorizationID"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.getAuthorizationID

```java
public String getAuthorizationID()
```

Reports the authorization ID in effect for the client of this
 session.
 This method can only be called if isComplete() returns true.

**返回**

- The authorization ID of the client.

**异常**

- **IllegalStateException** — if this authentication session has not completed
