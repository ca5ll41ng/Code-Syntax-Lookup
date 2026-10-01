---
id: "java-en-function-urlconnection-setdooutput"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.setDoOutput"
signature: "public void setDoOutput(boolean dooutput)"
title: "URLConnection.setDoOutput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.setDoOutput

```java
public void setDoOutput(boolean dooutput)
```

Sets the value of the `doOutput` field for this
 `URLConnection` to the specified value.
 

 A URL connection can be used for input and/or output.  Set the doOutput
 flag to true if you intend to use the URL connection for output,
 false if not.  The default is false.

**参数**

- **dooutput** — the new value.

**异常**

- **IllegalStateException** — if already connected

**参见**

- #getDoOutput()
