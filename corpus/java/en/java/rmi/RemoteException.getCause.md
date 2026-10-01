---
id: "java-en-function-remoteexception-getcause"
language: "java"
lang: "en"
category: "function"
name: "RemoteException.getCause"
signature: "public Throwable getCause()"
title: "RemoteException.getCause"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/RemoteException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteException.getCause

```java
public Throwable getCause()
```

Returns the cause of this exception.  This method returns the value
 of the `detail` field.

**返回**

- the cause, which may be `null`.

> *Since 1.4*
