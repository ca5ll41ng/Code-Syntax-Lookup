---
id: "java-en-function-remoteserver-getclienthost"
language: "java"
lang: "en"
category: "function"
name: "RemoteServer.getClientHost"
signature: "public static String getClientHost() throws ServerNotActiveException"
title: "RemoteServer.getClientHost"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteServer.getClientHost

```java
public static String getClientHost() throws ServerNotActiveException
```

Returns a string representation of the client host for the
 remote method invocation being processed in the current thread.

**返回**

- a string representation of the client host

**异常**

- **ServerNotActiveException** — if no remote method invocation is being processed in the current thread

> *Since 1.1*
