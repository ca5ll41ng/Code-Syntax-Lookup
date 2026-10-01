---
id: "java-en-function-java-util-concurrent-transferqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.TransferQueue"
title: "TransferQueue"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransferQueue

A `BlockingQueue` in which producers may wait for consumers
 to receive elements.  A `TransferQueue` may be useful for
 example in message passing applications in which producers
 sometimes (using method `transfer`) await receipt of
 elements by consumers invoking `take` or `poll`, while
 at other times enqueue elements (via method `put`) without
 waiting for receipt.
 `tryTransfer(Object) Non-blocking` and
 `tryTransfer(Object,long,TimeUnit) time-out` versions of
 `tryTransfer` are also available.
 A `TransferQueue` may also be queried, via `hasWaitingConsumer`, whether there are any threads waiting for
 items, which is a converse analogy to a `peek` operation.

 

Like other blocking queues, a `TransferQueue` may be
 capacity bounded.  If so, an attempted transfer operation may
 initially block waiting for available space, and/or subsequently
 block waiting for reception by a consumer.  Note that in a queue
 with zero capacity, such as `SynchronousQueue`, `put`
 and `transfer` are effectively synonymous.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.7*
