---
id: "java-en-function-serverref-getclienthost"
language: "java"
lang: "en"
category: "function"
name: "ServerRef.getClientHost"
signature: "String getClientHost() throws ServerNotActiveException"
title: "ServerRef.getClientHost"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ServerRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerRef.getClientHost

```java
String getClientHost() throws ServerNotActiveException
```

Returns the hostname of the current client.  When called from a
 thread actively handling a remote method invocation the
 hostname of the client is returned.

**返回**

- the client's host name

**异常**

- **ServerNotActiveException** — if called outside of servicing a remote method invocation

> *Since 1.1*
