---
id: "java-en-function-javax-security-sasl-sasl"
language: "java"
lang: "en"
category: "function"
name: "javax.security.sasl.Sasl"
title: "Sasl"
directive: "type"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl

A static class for creating SASL clients and servers.

 This class defines the policy of how to locate, load, and instantiate
 SASL clients and servers.

 For example, an application or library gets a SASL client by doing
 something like:

```

 SaslClient sc = Sasl.createSaslClient(mechanisms,
     authorizationId, protocol, serverName, props, callbackHandler);

```

 It can then proceed to use the instance to create an authentication connection.

 Similarly, a server gets a SASL server by using code that looks as follows:

```

 SaslServer ss = Sasl.createSaslServer(mechanism,
     protocol, serverName, props, callbackHandler);

```

> *Since 1.5*
