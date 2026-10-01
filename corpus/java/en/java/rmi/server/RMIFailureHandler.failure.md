---
id: "java-en-function-rmifailurehandler-failure"
language: "java"
lang: "en"
category: "function"
name: "RMIFailureHandler.failure"
signature: "public boolean failure(Exception ex)"
title: "RMIFailureHandler.failure"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIFailureHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIFailureHandler.failure

```java
public boolean failure(Exception ex)
```

The `failure` callback is invoked when the RMI
 runtime is unable to create a `ServerSocket` via the
 `RMISocketFactory`. An `RMIFailureHandler`
 is registered via a call to
 `RMISocketFactory.setFailureHandler`.  If no failure
 handler is installed, the default behavior is to attempt to
 re-create the ServerSocket.

**参数**

- **ex** — the exception that occurred during `ServerSocket` creation

**返回**

- if true, the RMI runtime attempts to retry `ServerSocket` creation

**参见**

- java.rmi.server.RMISocketFactory#setFailureHandler(RMIFailureHandler)

> *Since 1.1*
