---
id: "java-en-function-java-util-logging-sockethandler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.SocketHandler"
title: "SocketHandler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/SocketHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketHandler

Simple network logging `Handler`.
 

 `LogRecords` are published to a network stream connection.  By default
 the `XMLFormatter` class is used for formatting.
 

 **Configuration:**
 By default each `SocketHandler` is initialized using the following
 `LogManager` configuration properties where ``
 refers to the fully-qualified class name of the handler.
 If properties are not defined
 (or have invalid values) then the specified default values are used.
 
 
-    &lt;handler-name&gt;.level
        specifies the default level for the `Handler`
        (defaults to `Level.ALL`). 
 
-    &lt;handler-name&gt;.filter
        specifies the name of a `Filter` class to use
        (defaults to no `Filter`). 
 
-    &lt;handler-name&gt;.formatter
        specifies the name of a `Formatter` class to use
        (defaults to `java.util.logging.XMLFormatter`). 
 
-    &lt;handler-name&gt;.encoding
        the name of the character set encoding to use (defaults to
        the default platform encoding). 
 
-    &lt;handler-name&gt;.host
        specifies the target host name to connect to (no default). 
 
-    &lt;handler-name&gt;.port
        specifies the target TCP port to use (no default). 
 

 

 For example, the properties for `SocketHandler` would be:
 
 
-    java.util.logging.SocketHandler.level=INFO 
 
-    java.util.logging.SocketHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 For a custom handler, e.g. com.foo.MyHandler, the properties would be:
 
 
-    com.foo.MyHandler.level=INFO 
 
-    com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 The output IO stream is buffered, but is flushed after each
 `LogRecord` is written.

> *Since 1.4*
