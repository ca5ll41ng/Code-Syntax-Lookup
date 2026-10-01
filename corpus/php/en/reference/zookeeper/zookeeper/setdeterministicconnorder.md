---
id: "en-php-function-zookeeper-setdeterministicconnorder"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::setDeterministicConnOrder"
title: "Enable/disable quorum endpoint order randomization"
signature: "public static bool Zookeeper::setDeterministicConnOrder(bool $yesOrNo)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.setdeterministicconnorder.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable/disable quorum endpoint order randomization

## Description

```php
public static bool Zookeeper::setDeterministicConnOrder(bool $yesOrNo)
```

If passed a true value, will make the client connect to quorum peers in the order as specified in the zookeeper_init() call. A false value causes zookeeper_init() to permute the peer endpoints which is good for more even client connection distribution among the quorum peers. ZooKeeper C Client uses false by default.

## Parameters

- **`$yesOrNo`** — Disable/enable quorum endpoint order randomization.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `ZookeeperException`
