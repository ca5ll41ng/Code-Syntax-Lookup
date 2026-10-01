---
id: "java-en-function-pathelement-groupelement"
language: "java"
lang: "en"
category: "function"
name: "PathElement.groupElement"
signature: "static PathElement groupElement(String name)"
title: "PathElement.groupElement"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathElement.groupElement

```java
static PathElement groupElement(String name)
```

{@return a path element which selects a member layout with the given name in a
          group layout}

           element returned by this method will select the first one; that is,
           the group element with the lowest offset from the current path is
           selected. In such cases, using `groupElement` might be
           preferable.

**参数**

- **name** — the name of the member layout to be selected
