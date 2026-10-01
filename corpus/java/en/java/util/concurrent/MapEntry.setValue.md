---
id: "java-en-function-mapentry-setvalue"
language: "java"
lang: "en"
category: "function"
name: "MapEntry.setValue"
signature: "public V setValue(V value)"
title: "MapEntry.setValue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MapEntry.setValue

```java
public V setValue(V value)
```

Sets our entry's value and writes through to the map. The
 value to return is somewhat arbitrary here. Since we do not
 necessarily track asynchronous changes, the most recent
 "previous" value could be different from what we return (or
 could even have been removed, in which case the put will
 re-establish). We do not and cannot guarantee more.
