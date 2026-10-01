---
id: "java-en-function-java-util-logging-logrecord"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.LogRecord"
title: "LogRecord"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogRecord.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogRecord

LogRecord objects are used to pass logging requests between
 the logging framework and individual log Handlers.
 

 When a LogRecord is passed into the logging framework it
 logically belongs to the framework and should no longer be
 used or updated by the client application.
 

 Note that if the client application has not specified an
 explicit source method name and source class name, then the
 LogRecord class will infer them automatically when they are
 first accessed (due to a call on getSourceMethodName or
 getSourceClassName) by analyzing the call stack.  Therefore,
 if a logging Handler wants to pass off a LogRecord to another
 thread, or to transmit it over RMI, and if it wishes to subsequently
 obtain method name or class name information it should call
 one of getSourceClassName or getSourceMethodName to force
 the values to be filled in.
 

 ** Serialization notes:**
 
 
- The LogRecord class is serializable.

 
-  Because objects in the parameters array may not be serializable,
 during serialization all objects in the parameters array are
 written as the corresponding Strings (using Object.toString).

 
-  The ResourceBundle is not transmitted as part of the serialized
 form, but the resource bundle name is, and the recipient object's
 readObject method will attempt to locate a suitable resource bundle.

> *Since 1.4*
