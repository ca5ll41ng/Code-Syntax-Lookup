---
id: "java-en-function-urlclassloader-getresourceasstream"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.getResourceAsStream"
signature: "public InputStream getResourceAsStream(String name)"
title: "URLClassLoader.getResourceAsStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.getResourceAsStream

```java
public InputStream getResourceAsStream(String name)
```

Returns an input stream for reading the specified resource.
 If this loader is closed, then any resources opened by this method
 will be closed.

 

 The search order is described in the documentation for `getResource`.

**参数**

- **name** — The resource name

**返回**

- An input stream for reading the resource, or `null` if the resource could not be found

**异常**

- **NullPointerException** — If `name` is `null`

> *Since 1.7*
