---
id: "java-en-function-saslclient-evaluatechallenge"
language: "java"
lang: "en"
category: "function"
name: "SaslClient.evaluateChallenge"
signature: "public abstract byte[] evaluateChallenge(byte[] challenge) throws SaslException"
title: "SaslClient.evaluateChallenge"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClient.evaluateChallenge

```java
public abstract byte[] evaluateChallenge(byte[] challenge) throws SaslException
```

Evaluates the challenge data and generates a response.
 If a challenge is received from the server during the authentication
 process, this method is called to prepare an appropriate next
 response to submit to the server.

**参数**

- **challenge** — The non-null challenge sent from the server. The challenge array may have zero length.

**返回**

- The possibly null response to send to the server. It is null if the challenge accompanied a "SUCCESS" status and the challenge only contains data for the client to update its state and no response needs to be sent to the server. The response is a zero-length byte array if the client is to send a response with no data.

**异常**

- **SaslException** — If an error occurred while processing the challenge or generating a response.
