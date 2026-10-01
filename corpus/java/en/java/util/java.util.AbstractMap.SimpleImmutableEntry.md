---
id: "java-en-function-java-util-abstractmap-simpleimmutableentry"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractMap.SimpleImmutableEntry"
title: "SimpleImmutableEntry"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleImmutableEntry

An unmodifiable Entry maintaining a key and a value.  This class
 does not support the `setValue` method. Instances of
 this class are not associated with any map nor with any map's
 entry-set view.

 Instances of this class are not necessarily immutable, as the key
 and value may be mutable. An instance of this specific class
 is unmodifiable, because the key and value references cannot be
 changed. A reference of this type may not be unmodifiable,
 as a subclass may be modifiable or may provide the appearance of modifiability.
 

 This class may be convenient in methods that return thread-safe snapshots of
 key-value mappings. For alternatives, see the
 `entry Map::entry` and `copyOf Map.Entry::copyOf`
 methods.

**参数**

- **the** — type of the keys
- **the** — type of the value

> *Since 1.6*
