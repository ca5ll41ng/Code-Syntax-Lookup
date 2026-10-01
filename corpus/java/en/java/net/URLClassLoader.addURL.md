---
id: "java-en-function-urlclassloader-addurl"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.addURL"
signature: "protected void addURL(URL url)"
title: "URLClassLoader.addURL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.addURL

```java
protected void addURL(URL url)
```

Appends the specified URL to the list of URLs to search for
 classes and resources.
 

 If the URL specified is `null` or is already in the
 list of URLs, or if this loader is closed, then invoking this
 method has no effect.

**参数**

- **url** — the URL to be added to the search path of URLs
