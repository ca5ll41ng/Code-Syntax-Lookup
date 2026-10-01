---
id: "java-en-function-submissionpublisher-estimateminimumdemand"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.estimateMinimumDemand"
signature: "public long estimateMinimumDemand()"
title: "SubmissionPublisher.estimateMinimumDemand"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.estimateMinimumDemand

```java
public long estimateMinimumDemand()
```

Returns an estimate of the minimum number of items requested
 (via `request(long) request`) but not
 yet produced, among all current subscribers.

**返回**

- the estimate, or zero if no subscribers
