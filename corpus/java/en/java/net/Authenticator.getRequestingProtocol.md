---
id: "java-en-function-authenticator-getrequestingprotocol"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.getRequestingProtocol"
signature: "protected final String getRequestingProtocol()"
title: "Authenticator.getRequestingProtocol"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.getRequestingProtocol

```java
protected final String getRequestingProtocol()
```

Give the protocol that's requesting the connection.  Often this
 will be based on a URL, but in a future JDK it could be, for
 example, "SOCKS" for a password-protected SOCKS5 firewall.

**返回**

- the protocol, optionally followed by "/version", where version is a version number.

**参见**

- java.net.URL#getProtocol()
