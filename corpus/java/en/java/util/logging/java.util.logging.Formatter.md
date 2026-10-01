---
id: "java-en-function-java-util-logging-formatter"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.Formatter"
title: "Formatter"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter

A Formatter provides support for formatting LogRecords.
 

 Typically each logging Handler will have a Formatter associated
 with it.  The Formatter takes a LogRecord and converts it to
 a string.
 

 Some formatters (such as the XMLFormatter) need to wrap head
 and tail strings around a set of formatted records. The getHeader
 and getTail methods can be used to obtain these strings.

> *Since 1.4*
