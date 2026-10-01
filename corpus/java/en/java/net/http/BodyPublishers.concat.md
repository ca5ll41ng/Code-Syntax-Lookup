---
id: "java-en-function-bodypublishers-concat"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.concat"
signature: "public static BodyPublisher concat(BodyPublisher... publishers)"
title: "BodyPublishers.concat"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.concat

```java
public static BodyPublisher concat(BodyPublisher... publishers)
```

Returns a `BodyPublisher` that publishes a request
 body consisting of the concatenation of the request bodies
 published by a sequence of publishers.

 

 If the sequence is empty an `noBody() empty` publisher
 is returned. Otherwise, if the sequence contains a single element,
 that publisher is returned. Otherwise a concatenation publisher
 is returned.

 

 The request body published by a concatenation publisher
 is logically equivalent to the request body that would have
 been published by concatenating all the bytes of each publisher
 in sequence.

 

 Each publisher is lazily subscribed to in turn,
 until all the body bytes are published, an error occurs, or the
 concatenation publisher's subscription is cancelled.
 The concatenation publisher may be subscribed to more than once,
 which in turn may result in the publishers in the sequence being
 subscribed to more than once.

 

 The concatenation publisher has a known content
 length only if all publishers in the sequence have a known content
 length. The `contentLength() contentLength`
 reported by the concatenation publisher is computed as follows:
 
     
-  If any of the publishers reports an `contentLength() unknown` content length,
         or if the sum of the known content lengths would exceed
         `MAX_VALUE`, the resulting
         content length is unknown.
     
-  Otherwise, the resulting content length is the sum of the
         known content lengths, a number between
         `0` and `MAX_VALUE`, inclusive.
 

 `cancel() cancelled`, or an error occurs
 while publishing the bytes, not all publishers in the sequence may
 be subscribed to.

**参数**

- **publishers** — a sequence of publishers.

**返回**

- An aggregate publisher that publishes a request body logically equivalent to the concatenation of all bytes published by each publisher in the sequence.

> *Since 16*
