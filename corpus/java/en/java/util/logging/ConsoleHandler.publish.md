---
id: "java-en-function-consolehandler-publish"
language: "java"
lang: "en"
category: "function"
name: "ConsoleHandler.publish"
signature: "public void publish(LogRecord record)"
title: "ConsoleHandler.publish"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/ConsoleHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConsoleHandler.publish

```java
public void publish(LogRecord record)
```

Publish a `LogRecord`.
 

 The logging request was made initially to a `Logger` object,
 which initialized the `LogRecord` and forwarded it here.

 overridden `publish()` methods to be `synchronized` if they
 call `super.publish()` or format user arguments. See the
 `#threadSafety discussion in java.util.logging.Handler`
 for more information.

**参数**

- **record** — description of the log event. A null record is silently ignored and is not published
