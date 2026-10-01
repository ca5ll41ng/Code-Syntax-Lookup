---
id: "java-en-function-java-util-logging-streamhandler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.StreamHandler"
title: "StreamHandler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler

Stream based logging `Handler`.
 

 This is primarily intended as a base class or support class to
 be used in implementing other logging `Handlers`.
 

 `LogRecords` are published to a given `java.io.OutputStream`.
 

 **Configuration:**
 By default each `StreamHandler` is initialized using the following
 `LogManager` configuration properties where ``
 refers to the fully-qualified class name of the handler.
 If properties are not defined
 (or have invalid values) then the specified default values are used.
 
 
-    &lt;handler-name&gt;.level
        specifies the default level for the `Handler`
        (defaults to `Level.INFO`). 
 
-    &lt;handler-name&gt;.filter
        specifies the name of a `Filter` class to use
         (defaults to no `Filter`). 
 
-    &lt;handler-name&gt;.formatter
        specifies the name of a `Formatter` class to use
        (defaults to `java.util.logging.SimpleFormatter`). 
 
-    &lt;handler-name&gt;.encoding
        the name of the character set encoding to use (defaults to
        the default platform encoding). 
 

 

 For example, the properties for `StreamHandler` would be:
 
 
-    java.util.logging.StreamHandler.level=INFO 
 
-    java.util.logging.StreamHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 For a custom handler, e.g. com.foo.MyHandler, the properties would be:
 
 
-    com.foo.MyHandler.level=INFO 
 
-    com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter

> *Since 1.4*
