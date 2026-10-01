---
id: "java-en-function-java-net-http-websocket"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.WebSocket"
title: "WebSocket"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket

A WebSocket Client.

 

 `WebSocket` instances are created through `WebSocket.Builder`.

 

 WebSocket has an input and an output side. These sides are independent
 from each other. A side can either be open or closed. Once closed, the side
 remains closed. WebSocket messages are sent through a `WebSocket` and
 received through a `WebSocket.Listener` associated with it. Messages
 can be sent until the WebSocket's output is closed, and received until the
 WebSocket's input is closed.

 

 A send method is any of the `sendText`, `sendBinary`,
 `sendPing`, `sendPong` and `sendClose` methods of
 `WebSocket`. A send method initiates a send operation and returns a
 `CompletableFuture` which completes once the operation has completed.
 If the `CompletableFuture` completes normally the operation is
 considered succeeded. If the `CompletableFuture` completes
 exceptionally, the operation is considered failed. An operation that has been
 initiated but not yet completed is considered pending.

 

 A receive method is any of the `onText`, `onBinary`,
 `onPing`, `onPong` and `onClose` methods of
 `Listener`. WebSocket initiates a receive operation by invoking a
 receive method on the listener. The listener then must return a
 `CompletionStage` which completes once the operation has completed.

 

 To control receiving of messages, a WebSocket maintains an
 internal counter. This counter's value is a number of
 times the WebSocket has yet to invoke a receive method. While this counter is
 zero the WebSocket does not invoke receive methods. The counter is
 incremented by `n` when `request(n)` is called. The counter is
 decremented by one when the WebSocket invokes a receive method.
 `onOpen` and `onError` are not receive methods. WebSocket invokes
 `onOpen` prior to any other methods on the listener. WebSocket invokes
 `onOpen` at most once. WebSocket may invoke `onError` at any
 given time. If the WebSocket invokes `onError` or `onClose`, then
 no further listener's methods will be invoked, no matter the value of the
 counter. For a newly built WebSocket the counter is zero.

 

 Unless otherwise stated, `null` arguments will cause methods
 of `WebSocket` to throw `NullPointerException`, similarly,
 `WebSocket` will not pass `null` arguments to methods of
 `Listener`. The state of a WebSocket is not changed by the invocations
 that throw or return a `CompletableFuture` that completes with one of
 the `NullPointerException`, `IllegalArgumentException`,
 `IllegalStateException` exceptions.

 

 `WebSocket` handles received Ping and Close messages automatically
 (as per the WebSocket Protocol) by replying with Pong and Close messages. If
 the listener receives Ping or Close messages, no mandatory actions from the
 listener are required.

 analogous to that of a Subscription and the associated Subscriber of type
 `java.util.concurrent.Flow`.

> *Since 11*
