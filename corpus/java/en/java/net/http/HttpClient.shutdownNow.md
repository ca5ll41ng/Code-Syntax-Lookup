---
id: "java-en-function-httpclient-shutdownnow"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.shutdownNow"
signature: "public void shutdownNow()"
title: "HttpClient.shutdownNow"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.shutdownNow

```java
public void shutdownNow()
```

This method attempts to initiate an immediate shutdown.
 An implementation of this method may attempt to
 interrupt operations that are actively running.
 Operations are any tasks required to run a request previously
 submitted with `send` or `sendAsync` to completion.
 The behavior of actively running operations when interrupted
 is undefined. In particular, there is no guarantee that
 interrupted operations will terminate, or that code waiting
 on these operations will ever be notified.

 The default implementation of this method simply calls `shutdown`.
 Subclasses should override this method to implement the appropriate
 behavior.

**参见**

- ##closing Implementation Note on closing the HttpClient

> *Since 21*
