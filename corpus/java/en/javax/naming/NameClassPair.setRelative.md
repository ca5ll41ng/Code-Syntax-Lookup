---
id: "java-en-function-nameclasspair-setrelative"
language: "java"
lang: "en"
category: "function"
name: "NameClassPair.setRelative"
signature: "public void setRelative(boolean r)"
title: "NameClassPair.setRelative"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NameClassPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameClassPair.setRelative

```java
public void setRelative(boolean r)
```

Sets whether the name of this binding is relative to the target
 context (which is named by the first parameter of the list()
 method).

**参数**

- **r** — If true, the name of binding is relative to the target context; if false, the name of binding is a URL string.

**参见**

- #isRelative
- #setName
