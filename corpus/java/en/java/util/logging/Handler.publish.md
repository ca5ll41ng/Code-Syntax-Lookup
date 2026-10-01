---
id: "java-en-function-handler-publish"
language: "java"
lang: "en"
category: "function"
name: "Handler.publish"
signature: "public abstract void publish(LogRecord record)"
title: "Handler.publish"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.publish

```java
public abstract void publish(LogRecord record)
```

Publish a `LogRecord`.
 

 The logging request was made initially to a `Logger` object,
 which initialized the `LogRecord` and forwarded it here.
 

 The `Handler`  is responsible for formatting the message, when and
 if necessary.  The formatting should include localization.

 should avoid holding any locks while calling out to application code,
 such as the formatting of `LogRecord`.

**参数**

- **record** — description of the log event. A null record is silently ignored and is not published
