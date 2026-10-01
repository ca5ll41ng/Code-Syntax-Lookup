---
id: "java-en-function-urlconnection-setdoinput"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setDoInput"
signature: "public void setDoInput(boolean doinput)"
title: "URLConnection.setDoInput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setDoInput

```java
public void setDoInput(boolean doinput)
```

Sets the value of the `doInput` field for this
 `URLConnection` to the specified value.
 

 A URL connection can be used for input and/or output.  Set the doInput
 flag to true if you intend to use the URL connection for input,
 false if not.  The default is true.

**参数**

- **doinput** — the new value.

**异常**

- **IllegalStateException** — if already connected

**参见**

- java.net.URLConnection#doInput
- #getDoInput()
