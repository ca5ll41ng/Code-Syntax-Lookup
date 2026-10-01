---
id: "java-en-function-x509keymanager-getclientaliases"
language: "java"
lang: "en"
category: "function"
name: "X509KeyManager.getClientAliases"
signature: "String[] getClientAliases(String keyType, Principal[] issuers)"
title: "X509KeyManager.getClientAliases"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509KeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509KeyManager.getClientAliases

```java
String[] getClientAliases(String keyType, Principal[] issuers)
```

Get the matching aliases for authenticating the client side of a secure
 socket given the public key type and the list of
 certificate issuer authorities recognized by the peer (if any).

**参数**

- **keyType** — the key algorithm type name
- **issuers** — the list of acceptable CA issuer subject names, or null if it does not matter which issuers are used.

**返回**

- an array of the matching alias names, or null if there were no matches.
