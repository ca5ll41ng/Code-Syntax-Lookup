---
id: "java-en-function-bodysubscribers-offile"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofFile"
signature: "public static BodySubscriber<Path> ofFile(Path file, OpenOption... openOptions)"
title: "BodySubscribers.ofFile"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofFile

```java
public static BodySubscriber<Path> ofFile(Path file, OpenOption... openOptions)
```

Returns a `BodySubscriber` which stores the response body in a
 file opened with the given options and name. The file will be opened
 with the given options using `open(Path,OpenOption...)
 FileChannel.open` just before the body is read. Any exception thrown
 will be returned or thrown from `send(HttpRequest,
 BodyHandler) HttpClient::send` or `sendAsync(HttpRequest,
 BodyHandler) HttpClient::sendAsync` as appropriate.

 

 The `HttpResponse` using this subscriber is available after
 the entire response has been read.

**参数**

- **file** — the file to store the body in
- **openOptions** — the list of options to open the file with

**返回**

- a body subscriber

**异常**

- **IllegalArgumentException** — if an invalid set of open options are specified
