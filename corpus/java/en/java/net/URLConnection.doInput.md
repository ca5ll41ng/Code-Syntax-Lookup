---
id: "java-en-function-urlconnection-doinput"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.doInput"
signature: "protected boolean doInput = true"
title: "URLConnection.doInput"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.doInput

```java
protected boolean doInput = true
```

This variable is set by the `setDoInput` method. Its
 value is returned by the `getDoInput` method.
 

 A URL connection can be used for input and/or output. Setting the
 `doInput` flag to `true` indicates that
 the application intends to read data from the URL connection.
 

 The default value of this field is `true`.

**参见**

- java.net.URLConnection#getDoInput()
- java.net.URLConnection#setDoInput(boolean)
