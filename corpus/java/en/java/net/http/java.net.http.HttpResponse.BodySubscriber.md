---
id: "java-en-function-java-net-http-httpresponse-bodysubscriber"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse.BodySubscriber"
title: "BodySubscriber"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscriber

A `BodySubscriber` consumes response body bytes and converts them
 into a higher-level Java type.  The class `BodySubscribers
 BodySubscribers` provides implementations of many common body subscribers.

 

 The object acts as a `Flow.Subscriber`&lt;`List`&lt;`ByteBuffer`&gt;&gt; to the HTTP Client implementation, which publishes
 lists of ByteBuffers containing the response body. The Flow of data, as
 well as the order of ByteBuffers in the Flow lists, is a strictly ordered
 representation of the response body. Both the Lists and the ByteBuffers,
 once passed to the subscriber, are no longer used by the HTTP Client. The
 subscriber converts the incoming buffers of data to some higher-level
 Java type `T`.

 

 The `getBody` method returns a
 `CompletionStage``` that provides the response body
 object. The `CompletionStage` must be obtainable at any time. When
 it completes depends on the nature of type `T`. In many cases,
 when `T` represents the entire body after being consumed then
 the `CompletionStage` completes after the body has been consumed.
 If  `T` is a streaming type, such as `java.io.InputStream
 InputStream`, then it completes before the body has been read, because
 the calling code uses the `InputStream` to consume the data.

 HTTP exchange are properly released, an implementation of `BodySubscriber` should ensure to `request(long)
 request` more data until one of `onComplete() onComplete` or
 `onError(Throwable) onError` are signalled, or `cancel cancel` its `onSubscribe(Flow.Subscription) subscription` if unable or unwilling to
 do so. Calling `cancel` before exhausting the response body data
 may cause the underlying HTTP connection to be closed and prevent it
 from being reused for subsequent operations.

 Specifically, it is a flow of unmodifiable lists of read-only ByteBuffers.

**参数**

- **the** — response body type

**参见**

- BodySubscribers

> *Since 11*
