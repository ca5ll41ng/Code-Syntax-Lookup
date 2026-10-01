---
id: "java-en-function-keymanagerfactory-getkeymanagers"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactory.getKeyManagers"
signature: "public final KeyManager[] getKeyManagers()"
title: "KeyManagerFactory.getKeyManagers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactory.getKeyManagers

```java
public final KeyManager[] getKeyManagers()
```

Returns one key manager for each type of key material.

**返回**

- the key managers

**异常**

- **IllegalStateException** — if the KeyManagerFactory is not initialized
