---
id: "en-php-function-commonmark-cql-invoke"
language: "php"
lang: "en"
category: "function"
name: "CommonMark\\CQL::__invoke"
title: "CQL Execution"
signature: "public CommonMark\\CQL::__invoke(CommonMark\\Node $root, callable $handler)"
module: "cmark"
source_url: "https://www.php.net/manual/en/commonmark-cql.invoke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CQL Execution

## Description

```php
public CommonMark\CQL::__invoke(CommonMark\Node $root, callable $handler)
```

Shall invoke the current CQL function on the given `$root`, executing the given `$handler` on entry to a `CommonMark\Node`

## Parameters

- **`$root`** — the root node of a tree
- **`$handler`** — should have the prototype: `bool|null``handler()` `CommonMark\Node``$root` `CommonMark\Node``$entering` Should `$handler` fail to return (void), or return `null`, CQL will continue executing Should the handler return a truthy value, CQL will continue executing. Should the handler return a falsy value, CQL will stop executing
