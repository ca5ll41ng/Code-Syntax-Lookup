---
id: "java-en-function-bodyhandlers-fromsubscriber"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.fromSubscriber"
signature: "public static BodyHandler<Void> fromSubscriber(Subscriber<? super List<ByteBuffer>> subscriber)"
title: "BodyHandlers.fromSubscriber"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.fromSubscriber

```java
public static BodyHandler<Void> fromSubscriber(Subscriber<? super List<ByteBuffer>> subscriber)
```

Returns a response body handler that returns a `BodySubscriber
 BodySubscriber``` obtained from `fromSubscriber`, with the given
 `subscriber`.

 

 The response body is not available through this, or the `HttpResponse` API, but instead all response body is forwarded to the
 given `subscriber`, which should make it available, if
 appropriate, through some other mechanism, e.g. an entry in a
 database, etc.

 

 For example:
 {@snippet :
  TextSubscriber subscriber = new TextSubscriber();
  HttpResponse response = client.sendAsync(request,
      BodyHandlers.fromSubscriber(subscriber)).join();
  System.out.println(response.statusCode()); }

**参数**

- **subscriber** — the subscriber

**返回**

- a response body handler
