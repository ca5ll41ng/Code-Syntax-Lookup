---
id: "java-en-function-java-util-dictionary"
language: "java"
lang: "en"
category: "function"
name: "java.util.Dictionary"
title: "Dictionary"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Dictionary.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Dictionary

The `Dictionary` class is the abstract parent of any
 class, such as `Hashtable`, which maps keys to values.
 Every key and every value is an object. In any one `Dictionary`
 object, every key is associated with at most one value. Given a
 `Dictionary` and a key, the associated element can be looked up.
 Any non-`null` object can be used as a key and as a value.
 

 As a rule, the `equals` method should be used by
 implementations of this class to decide if two keys are the same.
 

 **NOTE: This class is obsolete.  New implementations should
 implement the Map interface, rather than extending this class.**

**参数**

- **the** — type of keys
- **the** — type of mapped values

**参见**

- java.util.Map
- java.lang.Object#equals(java.lang.Object)
- java.lang.Object#hashCode()
- java.util.Hashtable

> *Since 1.0*
