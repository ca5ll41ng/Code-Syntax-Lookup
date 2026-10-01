---
id: "java-en-function-java-util-concurrent-locks-abstractownablesynchronizer"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.AbstractOwnableSynchronizer"
title: "AbstractOwnableSynchronizer"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractOwnableSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractOwnableSynchronizer

A synchronizer that may be exclusively owned by a thread.  This
 class provides a basis for creating locks and related synchronizers
 that may entail a notion of ownership.  The
 `AbstractOwnableSynchronizer` class itself does not manage or
 use this information. However, subclasses and tools may use
 appropriately maintained values to help control and monitor access
 and provide diagnostics.

> *Since 1.6*
