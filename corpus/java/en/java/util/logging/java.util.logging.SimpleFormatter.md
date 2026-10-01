---
id: "java-en-function-java-util-logging-simpleformatter"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.SimpleFormatter"
title: "SimpleFormatter"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/SimpleFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFormatter

Print a brief summary of the `LogRecord` in a human readable
 format.  The summary will typically be 1 or 2 lines.

 

 
 **Configuration:**
 The `SimpleFormatter` is initialized with the format string
 specified in the {@systemProperty java.util.logging.SimpleFormatter.format}
 property to `format(LogRecord) format` the log messages.
 This property can be defined
 in the `getProperty logging properties`
 configuration file
 or as a system property.  If this property is set in both
 the logging properties and system properties,
 the format string specified in the system property will be used.
 If this property is not defined or the given format string
 is `java.util.IllegalFormatException illegal`,
 the default format is implementation-specific.

**参见**

- java.util.Formatter

> *Since 1.4*
