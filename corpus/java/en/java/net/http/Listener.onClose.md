---
id: "java-en-function-listener-onclose"
language: "java"
lang: "en"
category: "function"
name: "Listener.onClose"
signature: "default CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason)"
title: "Listener.onClose"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onClose

```java
default CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason)
```

Receives a Close message indicating the WebSocket's input has been
 closed.

 

 This is the last invocation from the specified `WebSocket`.
 By the time this invocation begins the WebSocket's input will have
 been closed.

 

 A Close message consists of a status code and a reason for
 closing. The status code is an integer from the range
 `1000 <= code <= 65535`. The `reason` is a string which
 has a UTF-8 representation not longer than `123` bytes.

 

 If the WebSocket's output is not already closed, the
 `CompletionStage` returned by this method will be used as an
 indication that the WebSocket's output may be closed. The WebSocket
 will close its output at the earliest of completion of the returned
 `CompletionStage` or invoking either of the `sendClose`
 or `abort` methods.

 effectively disables the reciprocating closure of the output.

 

 To specify a custom closure code or reason code the
 `sendClose` method may be invoked from inside the
 `onClose` invocation:
 {@snippet :
       public CompletionStage<?> onClose(WebSocket webSocket,
                            int statusCode,
                            String reason) {
        webSocket.sendClose(CUSTOM_STATUS_CODE, CUSTOM_REASON);
        return new CompletableFuture();
    } }

 `null`, indicating that the output should be closed
 immediately.

**参数**

- **webSocket** — the WebSocket on which the message has been received
- **statusCode** — the status code
- **reason** — the reason

**返回**

- a `CompletionStage` which completes when the `WebSocket` may be closed; or `null` if it may be closed immediately
