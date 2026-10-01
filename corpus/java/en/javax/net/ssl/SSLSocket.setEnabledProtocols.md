---
id: "java-en-function-sslsocket-setenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setEnabledProtocols"
signature: "public abstract void setEnabledProtocols(String[] protocols)"
title: "SSLSocket.setEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setEnabledProtocols

```java
public abstract void setEnabledProtocols(String[] protocols)
```

Sets the protocol versions enabled for use on this connection.
 

 The protocols must have been listed by
 getSupportedProtocols() as being supported.
 Following a successful call to this method, only protocols listed
 in the protocols parameter are enabled for use.

**参数**

- **protocols** — Names of all the protocols to enable.

**异常**

- **IllegalArgumentException** — when one or more of the protocols named by the parameter is not supported or when the protocols parameter is null.

**参见**

- #getEnabledProtocols()
