---
id: "java-en-function-sslengine-getenablesessioncreation"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getEnableSessionCreation"
signature: "public abstract boolean getEnableSessionCreation()"
title: "SSLEngine.getEnableSessionCreation"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getEnableSessionCreation

```java
public abstract boolean getEnableSessionCreation()
```

Returns true if new SSL sessions may be established by this engine.

**返回**

- true indicates that sessions may be created; this is the default.  false indicates that an existing session must be resumed

**参见**

- #setEnableSessionCreation(boolean)
