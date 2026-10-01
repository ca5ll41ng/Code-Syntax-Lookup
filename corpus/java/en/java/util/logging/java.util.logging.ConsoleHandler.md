---
id: "java-en-function-java-util-logging-consolehandler"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.ConsoleHandler"
title: "ConsoleHandler"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/ConsoleHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConsoleHandler

This `Handler` publishes log records to `System.err`.
 By default the `SimpleFormatter` is used to generate brief summaries.
 

 **Configuration:**
 By default each `ConsoleHandler` is initialized using the following
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
 

 

 For example, the properties for `ConsoleHandler` would be:
 
 
-    java.util.logging.ConsoleHandler.level=INFO 
 
-    java.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter 
 

 

 For a custom handler, e.g. com.foo.MyHandler, the properties would be:
 
 
-    com.foo.MyHandler.level=INFO 
 
-    com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter

> *Since 1.4*
