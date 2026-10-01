---
id: "java-en-function-abstracttask-oncompletion"
language: "java"
lang: "en"
category: "function"
name: "AbstractTask.onCompletion"
signature: "public void onCompletion(CountedCompleter<?> caller)"
title: "AbstractTask.onCompletion"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractTask.onCompletion

```java
public void onCompletion(CountedCompleter<?> caller)
```

{@inheritDoc}

 Clears spliterator and children fields.  Overriders MUST call
 `super.onCompletion` as the last thing they do if they want these
 cleared.
