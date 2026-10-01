---
id: "java-en-function-rmisocketfactory-setfailurehandler"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.setFailureHandler"
signature: "public static synchronized void setFailureHandler(RMIFailureHandler fh)"
title: "RMISocketFactory.setFailureHandler"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.setFailureHandler

```java
public static synchronized void setFailureHandler(RMIFailureHandler fh)
```

Sets the failure handler to be called by the RMI runtime if server
 socket creation fails.  By default, if no failure handler is installed
 and server socket creation fails, the RMI runtime does attempt to
 recreate the server socket.

**参数**

- **fh** — the failure handler.

**参见**

- #getFailureHandler
- java.rmi.server.RMIFailureHandler#failure(Exception)

> *Since 1.1*
