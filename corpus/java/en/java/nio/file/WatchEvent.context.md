---
id: "java-en-function-watchevent-context"
language: "java"
lang: "en"
category: "function"
name: "WatchEvent.context"
signature: "T context()"
title: "WatchEvent.context"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchEvent.context

```java
T context()
```

Returns the context for the event.

 

 In the case of `ENTRY_CREATE ENTRY_CREATE`,
 `ENTRY_DELETE ENTRY_DELETE`, and `ENTRY_MODIFY ENTRY_MODIFY` events the context is
 a `Path` that is the `relativize relative` path between
 the directory registered with the watch service, and the entry that is
 created, deleted, or modified.

**返回**

- the event context; may be `null`
