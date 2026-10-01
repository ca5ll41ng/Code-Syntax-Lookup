---
id: "java-en-function-x509extendedkeymanager-chooseengineserveralias"
language: "java"
lang: "en"
category: "function"
name: "X509ExtendedKeyManager.chooseEngineServerAlias"
signature: "public String chooseEngineServerAlias(String keyType, Principal[] issuers, SSLEngine engine)"
title: "X509ExtendedKeyManager.chooseEngineServerAlias"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509ExtendedKeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509ExtendedKeyManager.chooseEngineServerAlias

```java
public String chooseEngineServerAlias(String keyType, Principal[] issuers, SSLEngine engine)
```

Choose an alias to authenticate the server side of an
 SSLEngine connection given the public key type
 and the list of certificate issuer authorities recognized by
 the peer (if any).
 

 The default implementation returns null.

**参数**

- **keyType** — the key algorithm type name.
- **issuers** — the list of acceptable CA issuer subject names or null if it does not matter which issuers are used.
- **engine** — the SSLEngine to be used for this connection.  This parameter can be null, which indicates that implementations of this interface are free to select an alias applicable to any engine.

**返回**

- the alias name for the desired key, or null if there are no matches.
