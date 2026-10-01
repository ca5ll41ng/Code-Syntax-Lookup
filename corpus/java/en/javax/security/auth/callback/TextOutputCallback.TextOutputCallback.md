---
id: "java-en-function-textoutputcallback-textoutputcallback"
language: "java"
lang: "en"
category: "function"
name: "TextOutputCallback.TextOutputCallback"
signature: "public TextOutputCallback(int messageType, String message)"
title: "TextOutputCallback.TextOutputCallback"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/TextOutputCallback.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TextOutputCallback.TextOutputCallback

```java
public TextOutputCallback(int messageType, String message)
```

Construct a TextOutputCallback with a message type and message
 to be displayed.

**参数**

- **messageType** — the message type (`INFORMATION`, `WARNING` or `ERROR`).
- **message** — the message to be displayed.

**异常**

- **IllegalArgumentException** — if `messageType` is not either `INFORMATION`, `WARNING` or `ERROR`, if `message` is null, or if `message` has a length of 0.
