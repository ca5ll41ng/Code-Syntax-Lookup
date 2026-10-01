---
id: "java-en-function-websocket-request"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.request"
signature: "void request(long n)"
title: "WebSocket.request"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.request

```java
void request(long n)
```

Increments the counter of invocations of receive methods.

 

 This WebSocket will invoke `onText`, `onBinary`,
 `onPing`, `onPong` or `onClose` methods on the
 associated listener (i.e. receive methods) up to `n` more times.

 requested from this WebSocket to the associated listener, not the number
 of messages. Sometimes a message may be delivered to the listener in a
 single invocation, but not always. For example, Ping, Pong and Close
 messages are delivered in a single invocation of `onPing`,
 `onPong` and `onClose` methods respectively. However, whether
 or not Text and Binary messages are delivered in a single invocation of
 `onText` and `onBinary` methods depends on the boolean
 argument (`last`) of these methods. If `last` is
 `false`, then there is more to a message than has been delivered to
 the invocation.

 

 Here is an example of a listener that requests invocations, one at a
 time, until a complete message has been accumulated, and then processes
 the result:
 {@snippet :
        WebSocket.Listener listener = new WebSocket.Listener() {

        StringBuilder text = new StringBuilder();

        public CompletionStage<?> onText(WebSocket webSocket,
                                         CharSequence message,
                                         boolean last) {
            text.append(message);
            if (last) {
                processCompleteTextMessage(text);
                text = new StringBuilder();
            }
            webSocket.request(1);
            return null;
        }
    }; }

**参数**

- **n** — the number of invocations

**异常**

- **IllegalArgumentException** — if `n <= 0`
