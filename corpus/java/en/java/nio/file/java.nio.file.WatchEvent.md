---
id: "java-en-function-java-nio-file-watchevent"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.WatchEvent"
title: "WatchEvent"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchEvent

An event or a repeated event for an object that is registered with a `WatchService`.

 

 An event is classified by its `kind() kind` and has a `count() count` to indicate the number of times that the event has been
 observed. This allows for efficient representation of repeated events. The
 `context() context` method returns any context associated with
 the event. In the case of a repeated event then the context is the same for
 all events.

 

 Watch events are immutable and safe for use by multiple concurrent
 threads.

**参数**

- **The** — type of the context object associated with the event

> *Since 1.7*
