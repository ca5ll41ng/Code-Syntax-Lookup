---
id: "java-en-function-saslserver-getmechanismname"
language: "java"
lang: "en"
category: "function"
name: "SaslServer.getMechanismName"
signature: "public abstract String getMechanismName()"
title: "SaslServer.getMechanismName"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServer.getMechanismName

```java
public abstract String getMechanismName()
```

Returns the IANA-registered mechanism name of this SASL server.
 (e.g. "CRAM-MD5", "GSSAPI").

**返回**

- A non-null string representing the IANA-registered mechanism name.
