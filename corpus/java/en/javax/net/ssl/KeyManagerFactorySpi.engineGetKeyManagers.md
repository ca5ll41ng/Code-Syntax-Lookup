---
id: "java-en-function-keymanagerfactoryspi-enginegetkeymanagers"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactorySpi.engineGetKeyManagers"
signature: "protected abstract KeyManager[] engineGetKeyManagers()"
title: "KeyManagerFactorySpi.engineGetKeyManagers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactorySpi.engineGetKeyManagers

```java
protected abstract KeyManager[] engineGetKeyManagers()
```

Returns one key manager for each type of key material.

**返回**

- the key managers

**异常**

- **IllegalStateException** — if the KeyManagerFactorySpi is not initialized
