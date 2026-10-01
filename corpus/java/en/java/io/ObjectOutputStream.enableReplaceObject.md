---
id: "java-en-function-objectoutputstream-enablereplaceobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.enableReplaceObject"
signature: "protected boolean enableReplaceObject(boolean enable)"
title: "ObjectOutputStream.enableReplaceObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.enableReplaceObject

```java
protected boolean enableReplaceObject(boolean enable)
```

Enables the stream to do replacement of objects written to the stream.  When
 enabled, the `replaceObject` method is called for every object being
 serialized.

**参数**

- **enable** — true for enabling use of `replaceObject` for every object being serialized

**返回**

- the previous setting before this method was invoked
