---
id: "java-en-function-x509keymanager-chooseclientalias"
language: "java"
lang: "en"
category: "function"
name: "X509KeyManager.chooseClientAlias"
signature: "String chooseClientAlias(String[] keyType, Principal[] issuers, Socket socket)"
title: "X509KeyManager.chooseClientAlias"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509KeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509KeyManager.chooseClientAlias

```java
String chooseClientAlias(String[] keyType, Principal[] issuers, Socket socket)
```

Choose an alias to authenticate the client side of a secure
 socket given the public key type and the list of
 certificate issuer authorities recognized by the peer (if any).

**参数**

- **keyType** — the key algorithm type name(s), ordered with the most-preferred key type first.
- **issuers** — the list of acceptable CA issuer subject names or null if it does not matter which issuers are used.
- **socket** — the socket to be used for this connection.  This parameter can be null, which indicates that implementations are free to select an alias applicable to any socket.

**返回**

- the alias name for the desired key, or null if there are no matches.
