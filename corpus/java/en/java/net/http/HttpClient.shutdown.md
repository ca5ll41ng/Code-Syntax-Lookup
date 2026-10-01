---
id: "java-en-function-httpclient-shutdown"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.shutdown"
signature: "public void shutdown()"
title: "HttpClient.shutdown"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.shutdown

```java
public void shutdown()
```

Initiates an orderly shutdown in which  requests previously
 submitted with `send` or `sendAsync`
 are run to completion, but no new request will be accepted.
 Running a request to completion may involve running several
 operations in the background, including `#closing
 waiting for responses to be delivered`, which will all have to
 run to completion until the request is considered completed.

 Invocation has no additional effect if already shut down.

 

This method does not wait for previously submitted request
 to complete execution.  Use `awaitTermination(Duration)
 awaitTermination` or `close() close` to do that.

 The default implementation of this method does nothing. Subclasses should
 override this method to implement the appropriate behavior.

**参见**

- ##closing Implementation Note on closing the HttpClient

> *Since 21*
