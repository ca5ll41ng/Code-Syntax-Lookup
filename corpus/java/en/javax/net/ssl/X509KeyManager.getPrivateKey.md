---
id: "java-en-function-x509keymanager-getprivatekey"
language: "java"
lang: "en"
category: "function"
name: "X509KeyManager.getPrivateKey"
signature: "PrivateKey getPrivateKey(String alias)"
title: "X509KeyManager.getPrivateKey"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/X509KeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509KeyManager.getPrivateKey

```java
PrivateKey getPrivateKey(String alias)
```

Returns the key associated with the given alias.

**参数**

- **alias** — the alias name

**返回**

- the requested key, or null if the alias can't be found.
