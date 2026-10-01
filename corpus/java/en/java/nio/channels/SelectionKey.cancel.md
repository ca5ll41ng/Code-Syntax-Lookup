---
id: "java-en-function-selectionkey-cancel"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.cancel"
signature: "public abstract void cancel()"
title: "SelectionKey.cancel"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.cancel

```java
public abstract void cancel()
```

Requests that the registration of this key's channel with its selector
 be cancelled.  Upon return the key will be invalid and will have been
 added to its selector's cancelled-key set.  The key will be removed from
 all of the selector's key sets during the next selection operation.

 

 If this key has already been cancelled then invoking this method has
 no effect.  Once cancelled, a key remains forever invalid. 

 

 This method may be invoked at any time.  It synchronizes on the
 selector's cancelled-key set, and therefore may block briefly if invoked
 concurrently with a cancellation or selection operation involving the
 same selector.
