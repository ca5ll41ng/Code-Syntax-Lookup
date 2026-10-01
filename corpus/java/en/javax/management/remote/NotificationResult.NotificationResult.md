---
id: "java-en-function-notificationresult-notificationresult"
language: "java"
lang: "en"
category: "function"
name: "NotificationResult.NotificationResult"
signature: "public NotificationResult(long earliestSequenceNumber, long nextSequenceNumber, TargetedNotification[] targetedNotifications)"
title: "NotificationResult.NotificationResult"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/NotificationResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationResult.NotificationResult

```java
public NotificationResult(long earliestSequenceNumber, long nextSequenceNumber, TargetedNotification[] targetedNotifications)
```

Constructs a notification query result.

**参数**

- **earliestSequenceNumber** — the sequence number of the earliest notification still in the buffer.
- **nextSequenceNumber** — the sequence number of the next notification available for querying.
- **targetedNotifications** — the notifications resulting from the query, and the listeners they correspond to.  This array can be empty.

**异常**

- **IllegalArgumentException** — if targetedNotifications is null or if earliestSequenceNumber or nextSequenceNumber is negative.
