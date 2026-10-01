---
id: "java-en-function-httpclient-awaittermination"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.awaitTermination"
signature: "public boolean awaitTermination(Duration duration) throws InterruptedException"
title: "HttpClient.awaitTermination"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.awaitTermination

```java
public boolean awaitTermination(Duration duration) throws InterruptedException
```

Blocks until all operations have completed execution after a shutdown
 request, or the `duration` elapses, or the current thread is
 `interrupt() interrupted`, whichever happens first.
 Operations are any tasks required to run a request previously
 submitted with `send` or `sendAsync` to completion.

 

 This method does not wait if the duration to wait is less than or
 equal to zero. In this case, the method just tests if the thread has
 terminated.

 The default implementation of this method checks for null arguments, but
 otherwise does nothing and returns true.
 Subclasses should override this method to implement the proper behavior.

**参数**

- **duration** — the maximum time to wait

**返回**

- `true` if this client terminated and `false` if the timeout elapsed before termination

**异常**

- **InterruptedException** — if interrupted while waiting

**参见**

- ##closing Implementation Note on closing the HttpClient

> *Since 21*
