---
id: "java-en-function-bodyhandlers-fromlinesubscriber"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.fromLineSubscriber"
signature: "public static BodyHandler<Void> fromLineSubscriber(Subscriber<? super String> subscriber)"
title: "BodyHandlers.fromLineSubscriber"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.fromLineSubscriber

```java
public static BodyHandler<Void> fromLineSubscriber(Subscriber<? super String> subscriber)
```

Returns a response body handler that returns a `BodySubscriber
 BodySubscriber``` obtained from `fromLineSubscriber(Subscriber, Function, Charset, String)
 BodySubscribers.fromLineSubscriber`,
 with the given `subscriber`.
 The `Charset charset` used to decode the response body bytes is
 obtained from the HTTP response headers as specified by `ofString`,
 and lines are delimited in the manner of `readLine`.

 

 The response body is not available through this, or the `HttpResponse` API, but instead all response body is forwarded to the
 given `subscriber`, which should make it available, if
 appropriate, through some other mechanism, e.g. an entry in a
 database, etc.

 text line by line.

 

 For example:
 {@snippet :
  // A PrintSubscriber that implements Flow.Subscriber
  // and print lines received by onNext() on System.out
  PrintSubscriber subscriber = new PrintSubscriber(System.out);
  client.sendAsync(request, BodyHandlers.fromLineSubscriber(subscriber))
      .thenApply(HttpResponse::statusCode)
      .thenAccept((status) -> {
          if (status != 200) {
              System.err.printf("ERROR: %d status received%n", status);
          }
      }); }

**参数**

- **subscriber** — the subscriber

**返回**

- a response body handler
