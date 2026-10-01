---
id: "java-en-function-watchkey-pollevents"
language: "java"
lang: "en"
category: "function"
name: "WatchKey.pollEvents"
signature: "List<WatchEvent<?>> pollEvents()"
title: "WatchKey.pollEvents"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey.pollEvents

```java
List<WatchEvent<?>> pollEvents()
```

Retrieves and removes all pending events for this watch key, returning
 a `List` of the events that were retrieved.

 

 Note that this method does not wait if there are no events pending.

**返回**

- the list of the events retrieved; may be empty
