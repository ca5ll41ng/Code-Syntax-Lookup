---
id: "java-en-function-java-util-concurrent-flow-publisher"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.Flow.Publisher"
title: "Publisher"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Publisher

A producer of items (and related control messages) received by
 Subscribers.  Each current `Subscriber` receives the same
 items (via method `onNext`) in the same order, unless
 drops or errors are encountered. If a Publisher encounters an
 error that does not allow items to be issued to a Subscriber,
 that Subscriber receives `onError`, and then receives no
 further messages.  Otherwise, when it is known that no further
 messages will be issued to it, a subscriber receives `onComplete`.  Publishers ensure that Subscriber method
 invocations for each subscription are strictly ordered in happens-before
 order.

 

Publishers may vary in policy about whether drops (failures
 to issue an item because of resource limitations) are treated
 as unrecoverable errors.  Publishers may also vary about
 whether Subscribers receive items that were produced or
 available before they subscribed.

**参数**

- **the** — published item type
