---
id: "java-en-function-listener-ontext"
language: "java"
lang: "en"
category: "function"
name: "Listener.onText"
signature: "default CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last)"
title: "Listener.onText"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onText

```java
default CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last)
```

A textual data has been received.

 

 Return a `CompletionStage` which will be used by the
 `WebSocket` as an indication it may reclaim the
 `CharSequence`. Do not access the `CharSequence` after
 this `CompletionStage` has completed.

 {@snippet :
    webSocket.request(1);
    return null; }

**参数**

- **webSocket** — the WebSocket on which the data has been received
- **data** — the data
- **last** — whether this invocation completes the message

**返回**

- a `CompletionStage` which completes when the `CharSequence` may be reclaimed; or `null` if it may be reclaimed immediately
