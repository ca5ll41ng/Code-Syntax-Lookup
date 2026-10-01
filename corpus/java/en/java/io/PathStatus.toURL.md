---
id: "java-en-function-pathstatus-tourl"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.toURL"
signature: "public URL toURL() throws MalformedURLException"
title: "PathStatus.toURL"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.toURL

```java
public URL toURL() throws MalformedURLException
```

Converts this abstract pathname into a `file:` URL.  The
 exact form of the URL is system-dependent.  If it can be determined that
 the file located by this abstract pathname is a directory, then the
 resulting URL will end with a slash.

**返回**

- A URL object representing the equivalent file URL

**异常**

- **MalformedURLException** — If the path cannot be parsed as a URL

**参见**

- #toURI()
- java.net.URI
- java.net.URI#toURL()
- java.net.URL

> *Since 1.2*

> **⚠ Deprecated** — This method does not automatically escape characters that are illegal in URLs.  It is recommended that new code convert an abstract pathname into a URL by first converting it into a URI, via the `toURI() toURI` method, and then converting the URI into a URL via the `toURL() URI.toURL` method.
