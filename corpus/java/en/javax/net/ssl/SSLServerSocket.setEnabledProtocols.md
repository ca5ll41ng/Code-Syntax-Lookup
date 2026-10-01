---
id: "java-en-function-sslserversocket-setenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setEnabledProtocols"
signature: "public abstract void setEnabledProtocols(String[] protocols)"
title: "SSLServerSocket.setEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setEnabledProtocols

```java
public abstract void setEnabledProtocols(String[] protocols)
```

Controls which particular protocols are enabled for use by
 accepted connections.
 

 The protocols must have been listed by
 getSupportedProtocols() as being supported.
 Following a successful call to this method, only protocols listed
 in the protocols parameter are enabled for use.
 

 SSLSockets returned from accept()
 inherit this setting.

**参数**

- **protocols** — Names of all the protocols to enable.

**异常**

- **IllegalArgumentException** — when one or more of the protocols named by the parameter is not supported or when the protocols parameter is null.

**参见**

- #getEnabledProtocols()
- #getSupportedProtocols()
