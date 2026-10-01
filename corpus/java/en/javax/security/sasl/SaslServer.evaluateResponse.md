---
id: "java-en-function-saslserver-evaluateresponse"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.evaluateResponse"
signature: "public abstract byte[] evaluateResponse(byte[] response) throws SaslException"
title: "SaslServer.evaluateResponse"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.evaluateResponse

```java
public abstract byte[] evaluateResponse(byte[] response) throws SaslException
```

Evaluates the response data and generates a challenge.

 If a response is received from the client during the authentication
 process, this method is called to prepare an appropriate next
 challenge to submit to the client. The challenge is null if the
 authentication has succeeded and no more challenge data is to be sent
 to the client. It is non-null if the authentication must be continued
 by sending a challenge to the client, or if the authentication has
 succeeded but challenge data needs to be processed by the client.
 `isComplete()` should be called
 after each call to `evaluateResponse()`, to determine if any further
 response is needed from the client.

**参数**

- **response** — The non-null (but possibly empty) response sent by the client.

**返回**

- The possibly null challenge to send to the client. It is null if the authentication has succeeded and there is no more challenge data to be sent to the client.

**异常**

- **SaslException** — If an error occurred while processing the response or generating a challenge.
