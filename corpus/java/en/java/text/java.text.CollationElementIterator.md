---
id: "java-en-function-java-text-collationelementiterator"
language: "java"
lang: "en"
category: "function"
name: "java.text.CollationElementIterator"
title: "CollationElementIterator"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationElementIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationElementIterator

The `CollationElementIterator` class is used as an iterator
 to walk through each character of an international string. Use the iterator
 to return the ordering priority of the positioned character. The ordering
 priority of a character, which we refer to as a key, defines how a character
 is collated in the given collation object.

 

 For example, consider the following in Spanish:
 
```

 "ca" &rarr; the first key is key('c') and second key is key('a').
 "cha" &rarr; the first key is key('ch') and second key is key('a').
 
```

 
 And in German,
 
```

 "\u00e4b" &rarr; the first key is key('a'), the second key is key('e'), and
 the third key is key('b').
 
```

 
 The key of a character is an integer composed of primary order(short),
 secondary order(byte), and tertiary order(byte). Java strictly defines
 the size and signedness of its primitive data types. Therefore, the static
 functions `primaryOrder`, `secondaryOrder`, and
 `tertiaryOrder` return `int`, `short`,
 and `short` respectively to ensure the correctness of the key
 value.

 

 Example of the iterator usage,
 
 {@snippet lang=java :
 String testString = "This is a test";
 Collator col = Collator.getInstance();
 if (col instanceof RuleBasedCollator ruleBasedCollator) {
     CollationElementIterator collationElementIterator = ruleBasedCollator.getCollationElementIterator(testString);
     int primaryOrder = CollationElementIterator.primaryOrder(collationElementIterator.next());
         \u22ee
 }
 }
 

 

 `CollationElementIterator.next` returns the collation order
 of the next character. A collation order consists of primary order,
 secondary order and tertiary order. The data type of the collation
 order is **int**. The first 16 bits of a collation order
 is its primary order; the next 8 bits is the secondary order and the
 last 8 bits is the tertiary order.

 

**Note:** `CollationElementIterator` is a part of
 `RuleBasedCollator` implementation. It is only usable
 with `RuleBasedCollator` instances.

**参见**

- Collator
- RuleBasedCollator

> *Since 1.1*
