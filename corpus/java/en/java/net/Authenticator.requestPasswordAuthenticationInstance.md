---
id: "java-en-function-authenticator-requestpasswordauthenticationinstance"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.requestPasswordAuthenticationInstance"
signature: "public PasswordAuthentication requestPasswordAuthenticationInstance(String host, InetAddress addr, int port, String protocol, String prompt, String scheme, URL url, RequestorType reqType)"
title: "Authenticator.requestPasswordAuthenticationInstance"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.requestPasswordAuthenticationInstance

```java
public PasswordAuthentication requestPasswordAuthenticationInstance(String host, InetAddress addr, int port, String protocol, String prompt, String scheme, URL url, RequestorType reqType)
```

Ask this authenticator for a password.

**参数**

- **host** — The hostname of the site requesting authentication.
- **addr** — The InetAddress of the site requesting authorization, or null if not known.
- **port** — the port for the requested connection
- **protocol** — The protocol that's requesting the connection (`getRequestingProtocol`)
- **prompt** — A prompt string for the user
- **scheme** — The authentication scheme
- **url** — The requesting URL that caused the authentication
- **reqType** — The type (server or proxy) of the entity requesting authentication.

**返回**

- The username/password, or null if one can't be gotten

> *Since 9*
