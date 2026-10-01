---
id: "java-en-function-java-net-urlstreamhandler"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLStreamHandler"
title: "URLStreamHandler"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLStreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandler

The abstract class `URLStreamHandler` is the common
 superclass for all stream protocol handlers. A stream protocol
 handler knows how to make a connection for a particular protocol
 type, such as `http` or `https`.
 

 In most cases, an instance of a `URLStreamHandler`
 subclass is not created directly by an application. Rather, the
 first time a protocol name is encountered when constructing a
 `URL`, the appropriate stream protocol handler is
 automatically loaded.

**参见**

- java.net.URL#URL(java.lang.String, java.lang.String, int, java.lang.String)

> *Since 1.0*
