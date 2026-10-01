---
id: "java-en-function-authenticator-requestpasswordauthentication"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.requestPasswordAuthentication"
signature: "public static PasswordAuthentication requestPasswordAuthentication( InetAddress addr, int port, String protocol, String prompt, String scheme)"
title: "Authenticator.requestPasswordAuthentication"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.requestPasswordAuthentication

```java
public static PasswordAuthentication requestPasswordAuthentication( InetAddress addr, int port, String protocol, String prompt, String scheme)
```

Ask the authenticator that has been registered with the system
 for a password.

**参数**

- **addr** — The InetAddress of the site requesting authorization, or null if not known.
- **port** — the port for the requested connection
- **protocol** — The protocol that's requesting the connection (`getRequestingProtocol`)
- **prompt** — A prompt string for the user
- **scheme** — The authentication scheme

**返回**

- The username/password, or null if one can't be gotten.
