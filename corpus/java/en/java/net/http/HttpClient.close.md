---
id: "java-en-function-httpclient-close"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.close"
signature: "public void close()"
title: "HttpClient.close"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.close

```java
public void close()
```

Initiates an orderly shutdown in which  requests previously
 submitted to `send` or `sendAsync`
 are run to completion, but no new request will be accepted.
 Running a request to completion may involve running several
 operations in the background, including `#closing
 waiting for responses to be delivered`.
 This method waits until all operations have completed execution
 and the client has terminated.

 

 If interrupted while waiting, this method may attempt to stop all
 operations by calling `shutdownNow`. It then continues to wait
 until all actively executing operations have completed.
 The interrupted status will be re-asserted before this method returns.

 

 If already terminated, invoking this method has no effect.

 The default implementation invokes `shutdown()` and waits for tasks
 to complete execution with `awaitTermination`.

**参见**

- ##closing Implementation Note on closing the HttpClient

> *Since 21*
