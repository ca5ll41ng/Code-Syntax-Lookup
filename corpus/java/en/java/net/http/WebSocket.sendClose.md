---
id: "java-en-function-websocket-sendclose"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.sendClose"
signature: "CompletableFuture<WebSocket> sendClose(int statusCode, String reason)"
title: "WebSocket.sendClose"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.sendClose

```java
CompletableFuture<WebSocket> sendClose(int statusCode, String reason)
```

Initiates an orderly closure of this WebSocket's output by
 sending a Close message with the given status code and the reason.

 

 The `statusCode` is an integer from the range
 `1000 <= code <= 4999`. Status codes `1002`, `1003`,
 `1006`, `1007`, `1009`, `1010`, `1012`,
 `1013` and `1015` are illegal. Behaviour in respect to other
 status codes is implementation-specific. A legal `reason` is a
 string that has a UTF-8 representation not longer than `123` bytes.

 

 A `CompletableFuture` returned from this method can
 complete exceptionally with:
 
 
-  `IllegalArgumentException` -
           if `statusCode` is illegal, or
           if `reason` is illegal
 
-  `IOException` -
           if an I/O error occurs, or if the output is closed
 

 

 Unless the `CompletableFuture` returned from this method
 completes with `IllegalArgumentException`, or the method throws
 `NullPointerException`, the output will be closed.

 

 If not already closed, the input remains open until a Close message
 `onClose(WebSocket, int, String) received`, or
 `abort` is invoked, or an
 `onError(WebSocket, Throwable) error` occurs.

 status code and an empty string as a reason in a typical case:
 {@snippet :
      CompletableFuture webSocket = ...
      webSocket.thenCompose(ws -> ws.sendText("Hello, ", false))
             .thenCompose(ws -> ws.sendText("world!", true))
             .thenCompose(ws -> ws.sendClose(WebSocket.NORMAL_CLOSURE, ""))
             .join();
 }

 The `sendClose` method does not close this WebSocket's input. It
 merely closes this WebSocket's output by sending a Close message. To
 enforce closing the input, invoke the `abort` method. Here is an
 example of an application that sends a Close message, and then starts a
 timer. Once no data has been received within the specified timeout, the
 timer goes off and the alarm aborts `WebSocket`:
 {@snippet :
    MyAlarm alarm = new MyAlarm(webSocket::abort);
    WebSocket.Listener listener = new WebSocket.Listener() {

        public CompletionStage<?> onText(WebSocket webSocket,
                                         CharSequence data,
                                         boolean last) {
            alarm.snooze();
            ...
        }
        ...
    };
    ...
    Runnable startTimer = () -> {
        MyTimer idleTimer = new MyTimer();
        idleTimer.add(alarm, 30, TimeUnit.SECONDS);
    };
    webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "ok").thenRun(startTimer); }

**参数**

- **statusCode** — the status code
- **reason** — the reason

**返回**

- a `CompletableFuture` that completes, with this WebSocket, when the Close message has been sent
