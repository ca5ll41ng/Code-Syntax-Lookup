---
id: "java-en-function-abstractcollection-contains"
language: "java"
lang: "en"
category: "function"
name: "AbstractCollection.contains"
signature: "public boolean contains(Object o)"
title: "AbstractCollection.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractCollection.contains

```java
public boolean contains(Object o)
```

{@inheritDoc}

 This implementation iterates over the elements in the collection,
 checking each element in turn for equality with the specified element.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
