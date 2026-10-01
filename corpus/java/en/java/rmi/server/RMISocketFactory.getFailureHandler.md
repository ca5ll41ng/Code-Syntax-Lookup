---
id: "java-en-function-rmisocketfactory-getfailurehandler"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.getFailureHandler"
signature: "public static synchronized RMIFailureHandler getFailureHandler()"
title: "RMISocketFactory.getFailureHandler"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.getFailureHandler

```java
public static synchronized RMIFailureHandler getFailureHandler()
```

Returns the handler for socket creation failure set by the
 setFailureHandler method.

**返回**

- the failure handler

**参见**

- #setFailureHandler(RMIFailureHandler)

> *Since 1.1*
