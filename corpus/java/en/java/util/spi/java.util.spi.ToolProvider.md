---
id: "java-en-function-java-util-spi-toolprovider"
language: "java"
lang: "en"
category: "function"
name: "java.util.spi.ToolProvider"
title: "ToolProvider"
directive: "type"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ToolProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ToolProvider

An interface for command-line tools to provide a way to
 be invoked without necessarily starting a new VM.

 

Tool providers are normally located using the service-provider
 loading facility defined by `ServiceLoader`.
 Each provider must provide a name, and a method to run
 an instance of the corresponding tool. When a tool is run,
 it will be provided with an array of string arguments, and a
 pair of streams: one for normal (or expected) output and the other
 for reporting any errors that may occur.
 The interpretation of the string arguments will normally be defined by
 each individual tool provider, but will generally correspond to the
 arguments that could be provided to the tool when invoking the tool
 from the command line.

> *Since 9*
