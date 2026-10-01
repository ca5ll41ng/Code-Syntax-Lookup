---
id: "java-en-function-urlconnection-dooutput"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.doOutput"
signature: "protected boolean doOutput = false"
title: "URLConnection.doOutput"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.doOutput

```java
protected boolean doOutput = false
```

This variable is set by the `setDoOutput` method. Its
 value is returned by the `getDoOutput` method.
 

 A URL connection can be used for input and/or output. Setting the
 `doOutput` flag to `true` indicates
 that the application intends to write data to the URL connection.
 

 The default value of this field is `false`.

**参见**

- java.net.URLConnection#getDoOutput()
- java.net.URLConnection#setDoOutput(boolean)
