---
id: "java-en-function-sslengine-setenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.setEnabledProtocols"
signature: "public abstract void setEnabledProtocols(String[] protocols)"
title: "SSLEngine.setEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.setEnabledProtocols

```java
public abstract void setEnabledProtocols(String[] protocols)
```

Set the protocol versions enabled for use on this engine.
 

 The protocols must have been listed by getSupportedProtocols()
 as being supported.  Following a successful call to this method,
 only protocols listed in the `protocols` parameter
 are enabled for use.

**参数**

- **protocols** — Names of all the protocols to enable.

**异常**

- **IllegalArgumentException** — when one or more of the protocols named by the parameter is not supported or when the protocols parameter is null.

**参见**

- #getEnabledProtocols()
