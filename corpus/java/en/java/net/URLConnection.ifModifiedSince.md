---
id: "java-en-function-urlconnection-ifmodifiedsince"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.ifModifiedSince"
signature: "protected long ifModifiedSince = 0"
title: "URLConnection.ifModifiedSince"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.ifModifiedSince

```java
protected long ifModifiedSince = 0
```

Some protocols support skipping the fetching of the object unless
 the object has been modified more recently than a certain time.
 

 A nonzero value gives a time as the number of milliseconds since
 January 1, 1970, GMT. The object is fetched only if it has been
 modified more recently than that time.
 

 This variable is set by the `setIfModifiedSince`
 method. Its value is returned by the
 `getIfModifiedSince` method.
 

 The default value of this field is `0`, indicating
 that the fetching must always occur.

**参见**

- java.net.URLConnection#getIfModifiedSince()
- java.net.URLConnection#setIfModifiedSince(long)
