---
id: "java-en-function-java-util-concurrent-threadpoolexecutor-callerrunspolicy"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ThreadPoolExecutor.CallerRunsPolicy"
title: "CallerRunsPolicy"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallerRunsPolicy

A handler for rejected tasks that runs the rejected task
 directly in the calling thread of the `execute` method,
 unless the executor has been shut down, in which case the task
 is discarded.
