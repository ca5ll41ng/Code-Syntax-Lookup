---
id: "java-en-function-java-util-logging-filter"
language: "java"
lang: "en"
category: "function"
name: "java.util.logging.Filter"
title: "Filter"
directive: "type"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Filter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Filter

A Filter can be used to provide fine grain control over
 what is logged, beyond the control provided by log levels.
 

 Each Logger and each Handler can have a filter associated with it.
 The Logger or Handler will call the isLoggable method to check
 if a given LogRecord should be published.  If isLoggable returns
 false, the LogRecord will be discarded.

> *Since 1.4*
