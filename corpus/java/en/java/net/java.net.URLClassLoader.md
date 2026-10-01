---
id: "java-en-function-java-net-urlclassloader"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLClassLoader"
title: "URLClassLoader"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader

This class loader is used to load classes and resources from a search
 path of URLs referring to both JAR files and directories. Any `jar:`
 scheme URL (see `java.net.JarURLConnection`) is assumed to refer to a
 JAR file.  Any `file:` scheme URL that ends with a '/' is assumed to
 refer to a directory. Otherwise, the URL is assumed to refer to a JAR file
 which will be opened as needed.
 

 This class loader supports the loading of classes and resources from the
 contents of a multi-release
 JAR file that is referred to by a given URL.

> *Since 1.2*
