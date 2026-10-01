---
id: "java-en-function-java-text-collationkey"
language: "java"
lang: "en"
category: "function"
name: "java.text.CollationKey"
title: "CollationKey"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationKey

A `CollationKey` represents a `String` under the
 rules of a specific `Collator` object. Comparing two
 `CollationKey`s returns the relative order of the
 `String`s they represent. Using `CollationKey`s
 to compare `String`s is generally faster than using
 `Collator.compare`. Thus, when the `String`s
 must be compared multiple times, for example when sorting a list
 of `String`s. It's more efficient to use `CollationKey`s.

 

 You can not create `CollationKey`s directly. Rather,
 generate them by calling `Collator.getCollationKey`.
 You can only compare `CollationKey`s generated from
 the same `Collator` object.

 

 Generating a `CollationKey` for a `String`
 involves examining the entire `String`
 and converting it to series of bits that can be compared bitwise. This
 allows fast comparisons once the keys are generated. The cost of generating
 keys is recouped in faster comparisons when `String`s need
 to be compared many times. On the other hand, the result of a comparison
 is often determined by the first couple of characters of each `String`.
 `Collator.compare` examines only as many characters as it needs which
 allows it to be faster when doing single comparisons.
 

 The following example shows how `CollationKey`s might be used
 to sort a list of `String`s.
 
 {@snippet lang=java :
 // Create an array of CollationKeys for the Strings to be sorted.
 Collator myCollator = Collator.getInstance();
 CollationKey[] keys = new CollationKey[3];
 keys[0] = myCollator.getCollationKey("Tom");
 keys[1] = myCollator.getCollationKey("Dick");
 keys[2] = myCollator.getCollationKey("Harry");
 sort(keys);

 //...

 // Inside body of sort routine, compare keys this way
 if (keys[i].compareTo(keys[j]) > 0)
    // swap keys[i] and keys[j]

 //...

 // Finally, when we've returned from sort.
 System.out.println(keys[0].getSourceString());
 System.out.println(keys[1].getSourceString());
 System.out.println(keys[2].getSourceString());
 }

**参见**

- Collator
- RuleBasedCollator

> *Since 1.1*
