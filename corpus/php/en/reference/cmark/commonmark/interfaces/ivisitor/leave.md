---
id: "en-php-function-commonmark-interfaces-ivisitor-leave"
language: "php"
lang: "en"
category: "function"
name: "CommonMark\\Interfaces\\IVisitor::leave"
title: "Visitation"
signature: "abstract public int|IVisitable|null CommonMark\\Interfaces\\IVisitor::leave(IVisitable $visitable)"
module: "cmark"
source_url: "https://www.php.net/manual/en/commonmark-interfaces-ivisitor.leave.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Visitation

## Description

```php
abstract public int|IVisitable|null CommonMark\Interfaces\IVisitor::leave(IVisitable $visitable)
```

## Parameters

- **`$visitable`** — The current `CommonMark\Interfaces\IVisitable` being exited

## Return Values

Returning `CommonMark\Interfaces\IVisitor::Done` will cause the backing iterator to exit.

Returning `CommonMark\Interfaces\IVisitor::Enter` will reset the backing iterator at entering the current `IVisitable`

Returning `CommonMark\Interfaces\IVisitor::Leave` will reset the backing iterator at exiting the current `IVisitable`

Returning an `IVisitable` will reset the backing iterator at exiting the given `IVisitable`

Returning nothing will allow the backing iterator to continue

## See Also

 `commonmark-interfaces-ivisitable.accept`
