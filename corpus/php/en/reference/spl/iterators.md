---
id: "en-php-guide-spl-iterators"
language: "php"
lang: "en"
category: "guide"
name: "spl.iterators"
title: "Iterators"
module: "spl"
source_url: "https://www.php.net/manual/en/spl.iterators.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Iterators

SPL provides a set of iterators to traverse over objects.    SPL Iterators Class Tree 
- `ArrayIterator` - `RecursiveArrayIterator`
- `EmptyIterator`
- `IteratorIterator` - `AppendIterator` - `CachingIterator` - `RecursiveCachingIterator` - `FilterIterator` - `CallbackFilterIterator` - `RecursiveCallbackFilterIterator` - `RecursiveFilterIterator` - `ParentIterator` - `RegexIterator` - `RecursiveRegexIterator` - `InfiniteIterator` - `LimitIterator` - `NoRewindIterator`
- `MultipleIterator`
- `RecursiveIteratorIterator` - `RecursiveTreeIterator`
- `DirectoryIterator` (extends `SplFileInfo`) - `FilesystemIterator` - `GlobIterator` - `RecursiveDirectoryIterator`
