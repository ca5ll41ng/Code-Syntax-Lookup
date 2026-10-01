---
id: "java-en-function-streamhandler-publish"
language: "java"
lang: "en"
category: "function"
name: "StreamHandler.publish"
signature: "public void publish(LogRecord record)"
title: "StreamHandler.publish"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler.publish

```java
public void publish(LogRecord record)
```

Format and publish a `LogRecord`.
 

 The `StreamHandler` first checks if there is an `OutputStream`
 and if the given `LogRecord` has at least the required log level.
 If not it silently returns.  If so, it calls any associated
 `Filter` to check if the record should be published.  If so,
 it calls its `Formatter` to format the record and then writes
 the result to the current output stream.
 

 If this is the first `LogRecord` to be written to a given
 `OutputStream`, the `Formatter`'s "head" string is
 written to the stream before the `LogRecord` is written.

 formatting, but `this` instance is synchronized when writing to the
 output stream. To avoid deadlock risk, subclasses must not hold locks
 while calling `super.publish()`. Specifically, subclasses must
 not define the overridden `publish()` method to be
 `synchronized` if they call `super.publish()`.

**参数**

- **record** — description of the log event. A null record is silently ignored and is not published
