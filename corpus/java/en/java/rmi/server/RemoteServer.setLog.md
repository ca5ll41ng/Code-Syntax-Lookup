---
id: "java-en-function-remoteserver-setlog"
language: "java"
lang: "en"
category: "function"
name: "RemoteServer.setLog"
signature: "public static void setLog(java.io.OutputStream out)"
title: "RemoteServer.setLog"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteServer.setLog

```java
public static void setLog(java.io.OutputStream out)
```

Log RMI calls to the output stream out. If
 out is null, call logging is turned off.

**参数**

- **out** — the output stream to which RMI calls should be logged

**参见**

- #getLog

> *Since 1.1*
