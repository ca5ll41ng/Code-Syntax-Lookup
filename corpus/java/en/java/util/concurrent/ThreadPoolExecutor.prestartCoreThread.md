---
id: "java-en-function-threadpoolexecutor-prestartcorethread"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.prestartCoreThread"
signature: "public boolean prestartCoreThread()"
title: "ThreadPoolExecutor.prestartCoreThread"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.prestartCoreThread

```java
public boolean prestartCoreThread()
```

Starts a core thread, causing it to idly wait for work. This
 overrides the default policy of starting core threads only when
 new tasks are executed. This method will return `false`
 if all core threads have already been started.

**返回**

- `true` if a thread was started
