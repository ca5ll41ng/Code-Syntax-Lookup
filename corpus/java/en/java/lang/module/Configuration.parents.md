---
id: "java-en-function-configuration-parents"
language: "java"
lang: "en"
category: "function"
name: "Configuration.parents"
signature: "public List<Configuration> parents()"
title: "Configuration.parents"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.parents

```java
public List<Configuration> parents()
```

Returns an unmodifiable list of this configuration's parents, in search
 order. If this is the `empty() empty configuration` then an
 empty list is returned.

**返回**

- A possibly-empty unmodifiable list of this parent configurations
