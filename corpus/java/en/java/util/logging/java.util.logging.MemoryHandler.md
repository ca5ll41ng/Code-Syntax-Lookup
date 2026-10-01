---
id: "java-en-function-java-util-logging-memoryhandler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.MemoryHandler"
title: "MemoryHandler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/MemoryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryHandler

`Handler` that buffers requests in a circular buffer in memory.
 

 Normally this `Handler` simply stores incoming `LogRecords`
 into its memory buffer and discards earlier records.  This buffering
 is very cheap and avoids formatting costs.  On certain trigger
 conditions, the `MemoryHandler` will push out its current buffer
 contents to a target `Handler`, which will typically publish
 them to the outside world.
 

 There are three main models for triggering a push of the buffer:
 
 
- 
 An incoming `LogRecord` has a type that is greater than
 a pre-defined level, the `pushLevel`. 
 
- 
 An external class calls the `push` method explicitly. 
 
- 
 A subclass overrides the `log` method and scans each incoming
 `LogRecord` and calls `push` if a record matches some
 desired criteria. 
 

 

 **Configuration:**
 By default each `MemoryHandler` is initialized using the following
 `LogManager` configuration properties where ``
 refers to the fully-qualified class name of the handler.
 If properties are not defined
 (or have invalid values) then the specified default values are used.
 If no default value is defined then a RuntimeException is thrown.
 
 
-    &lt;handler-name&gt;.level
        specifies the level for the `Handler`
        (defaults to `Level.ALL`). 
 
-    &lt;handler-name&gt;.filter
        specifies the name of a `Filter` class to use
        (defaults to no `Filter`). 
 
-    &lt;handler-name&gt;.size
        defines the buffer size (defaults to 1000). 
 
-    &lt;handler-name&gt;.push
        defines the `pushLevel` (defaults to `level.SEVERE`). 
 
-    &lt;handler-name&gt;.target
        specifies the name of the target `Handler ` class.
        (no default). 
 

 

 For example, the properties for `MemoryHandler` would be:
 
 
-    java.util.logging.MemoryHandler.level=INFO 
 
-    java.util.logging.MemoryHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 For a custom handler, e.g. com.foo.MyHandler, the properties would be:
 
 
-    com.foo.MyHandler.level=INFO 
 
-    com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter

> *Since 1.4*
