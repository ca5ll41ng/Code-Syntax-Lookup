---
id: "java-en-function-abstractspliterator-estimatesize"
language: "java"
lang: "en"
category: "function"
name: "AbstractSpliterator.estimateSize"
signature: "public long estimateSize()"
title: "AbstractSpliterator.estimateSize"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSpliterator.estimateSize

```java
public long estimateSize()
```

{@inheritDoc}

 This implementation returns the estimated size as reported when
 created and, if the estimate size is known, decreases in size when
 split.
