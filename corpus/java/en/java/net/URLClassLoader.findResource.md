---
id: "java-en-function-urlclassloader-findresource"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.findResource"
signature: "public URL findResource(final String name)"
title: "URLClassLoader.findResource"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.findResource

```java
public URL findResource(final String name)
```

Finds the resource with the specified name on the URL search path.

**参数**

- **name** — the name of the resource

**返回**

- a `URL` for the resource, or `null` if the resource could not be found, or if the loader is closed.
