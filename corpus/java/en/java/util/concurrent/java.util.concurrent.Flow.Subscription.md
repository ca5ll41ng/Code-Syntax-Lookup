---
id: "java-en-function-java-util-concurrent-flow-subscription"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.Flow.Subscription"
title: "Subscription"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscription

Message control linking a `Publisher` and `Subscriber`.  Subscribers receive items only when requested,
 and may cancel at any time. The methods in this interface are
 intended to be invoked only by their Subscribers; usages in
 other contexts have undefined effects.
