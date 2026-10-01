---
id: "java-en-function-enumerator-expectedmodcount"
language: "java"
lang: "en"
category: "function"
name: "Enumerator.expectedModCount"
signature: "protected int expectedModCount = Hashtable.this.modCount"
title: "Enumerator.expectedModCount"
directive: "field"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Enumerator.expectedModCount

```java
protected int expectedModCount = Hashtable.this.modCount
```

The modCount value that the iterator believes that the backing
 Hashtable should have.  If this expectation is violated, the iterator
 has detected concurrent modification.
