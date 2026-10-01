---
id: "java-en-function-sasl-bound_server_name"
language: "java"
lang: "en"
category: "function"
name: "Sasl.BOUND_SERVER_NAME"
signature: "public static final String BOUND_SERVER_NAME = \"javax.security.sasl.bound.server.name\""
title: "Sasl.BOUND_SERVER_NAME"
directive: "field"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.BOUND_SERVER_NAME

```java
public static final String BOUND_SERVER_NAME = "javax.security.sasl.bound.server.name"
```

The name of a property that specifies the bound server name for
 an unbound server. A server is created as an unbound server by setting
 the `serverName` argument in `createSaslServer` as null.
 The property contains the bound host name after the authentication
 exchange has completed. It is only available on the server side.
 
The value of this constant is
 `"javax.security.sasl.bound.server.name"`.
