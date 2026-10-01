---
id: "java-en-function-java-net-spi-urlstreamhandlerprovider"
language: "java"
lang: "en"
category: "function"
name: "java.net.spi.URLStreamHandlerProvider"
title: "URLStreamHandlerProvider"
directive: "type"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/URLStreamHandlerProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLStreamHandlerProvider

URL stream handler service-provider class.

 

 A URL stream handler provider is a concrete subclass of this class that
 has a zero-argument constructor. URL stream handler providers may be
 installed in an instance of the Java platform by adding them to the
 application class path.

 

 A URL stream handler provider identifies itself with a
 provider-configuration file named java.net.spi.URLStreamHandlerProvider in
 the resource directory META-INF/services. The file should contain a list of
 fully-qualified concrete URL stream handler provider class names, one per
 line.

 

 URL stream handler providers are located at runtime, as specified in the
 `URL(String,String,int,String) URL constructor`.

> *Since 9*
