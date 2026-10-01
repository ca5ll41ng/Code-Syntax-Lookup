---
id: "java-en-function-charset-displayname"
language: "java"
lang: "en"
category: "function"
name: "Charset.displayName"
signature: "public String displayName()"
title: "Charset.displayName"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.displayName

```java
public String displayName()
```

Returns this charset's human-readable name for the default locale.

 

 The default implementation of this method simply returns this
 charset's canonical name.  Concrete subclasses of this class may
 override this method in order to provide a localized display name.

**返回**

- The display name of this charset in the default locale
