---
id: "java-en-function-pathstatus-setlastmodified"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.setLastModified"
signature: "public boolean setLastModified(long time)"
title: "PathStatus.setLastModified"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.setLastModified

```java
public boolean setLastModified(long time)
```

Sets the last-modified time of the file or directory located by this
 abstract pathname.

 

 All platforms support file-modification times to the nearest second,
 but some provide more precision.  The argument will be truncated to fit
 the supported precision.  If the operation succeeds and no intervening
 operations on the file take place, then the next invocation of the
 `lastModified` method will return the (possibly
 truncated) `time` argument that was passed to this method.

**参数**

- **time** — The new last-modified time, measured in milliseconds since the epoch (00:00:00 GMT, January 1, 1970)

**返回**

- `true` if and only if the operation succeeded; `false` otherwise

**异常**

- **IllegalArgumentException** — If the argument is negative

> *Since 1.2*
