---
id: "java-en-function-urlclassloader-geturls"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.getURLs"
signature: "public URL[] getURLs()"
title: "URLClassLoader.getURLs"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.getURLs

```java
public URL[] getURLs()
```

Returns the search path of URLs for loading classes and resources.
 This includes the original list of URLs specified to the constructor,
 along with any URLs subsequently appended by the addURL() method.

**返回**

- the search path of URLs for loading classes and resources.
