---
id: "zh-php-function-function-password-hash"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "password_hash"
title: "创建密码的散列（hash）"
signature: "string password_hash(string $password, string|int|null $algo, array $options = [])"
module: "password"
source_url: "https://www.php.net/manual/zh/function.password-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建密码的散列（hash）

## 说明

```php
string password_hash(string $password, string|int|null $algo, array $options = [])
```

`password_hash()` 使用足够强度的单向散列算法创建密码的散列（hash）。

当前支持的算法：

- `PASSWORD_DEFAULT` - 使用 bcrypt 算法 (PHP 5.5.0 默认)。 注意，该常量会随着 PHP 加入更新更高强度的算法而改变。 所以，使用此常量生成结果的长度将在未来有变化。 因此，数据库里储存结果的列可超过60个字节（最好是255个字节）。
- `PASSWORD_BCRYPT` - 使用 bcrypt 算法创建散列。 这将使用 `$2y$` 标识生成标准的 `crypt()` 兼容散列。
- `PASSWORD_ARGON2I` - 使用 Argon2i 散列算法创建散列。 只有在 PHP 编译时加入 Argon2 支持时才能使用该算法。
- `PASSWORD_ARGON2ID` - 使用 Argon2id 散列算法创建散列。 只有在 PHP 编译时加入 Argon2 支持时才能使用该算法。

`PASSWORD_BCRYPT` 支持的选项：

- `salt`(`string`) - 手动提供散列密码的盐值（salt）。这将避免自动生成盐值（salt）。 省略此值后，`password_hash()` 会为每个密码散列自动生成随机的盐值。这种操作是有意的模式。 > 盐值（salt）选项已废弃（deprecated）。 现在最好仅选择使用默认产生的盐值。 从 PHP 8.0.0 起，明确指定的 salt 值会被忽略。
- `cost` (`int`) - 代表算法使用的 cost。`crypt()` 页面上有 cost 值的示例。 省略时，默认值是 `12`。 这个 cost 是个不错的底线，但应根据使用的硬件进行调整。

`PASSWORD_ARGON2I` 和 `PASSWORD_ARGON2ID` 支持的选项：

- `memory_cost` (`int`) - 计算 Argon2 散列时的最大内存（单位：KB）。默认值： `PASSWORD_ARGON2_DEFAULT_MEMORY_COST`。
- `time_cost` (`int`) - 计算 Argon2 散列时最多的时间。默认值： `PASSWORD_ARGON2_DEFAULT_TIME_COST`。
- `threads` (`int`) - 计算 Argon2 散列时最多的线程数。默认值： `PASSWORD_ARGON2_DEFAULT_THREADS`。 > 只有在 PHP 使用 libargon2 时可用；如果是 libsodium 的实现，则无法使用。

## 参数

- **`$password`** — 用户的密码。
  > 使用 `PASSWORD_BCRYPT` 做算法，将使 `$password` 参数最长为72个字节，超过会被截断。


- **`$algo`** — 一个用来在散列密码时指示算法的密码算法常量。
- **`$options`** — 一个包含有选项的关联数组。详细的参数说明，请参考文档 密码算法常数。

## 返回值

返回散列后的密码。

使用的算法、cost 和盐值作为散列的一部分返回。所以验证散列值的所有信息都已经包含在内。 这使 `password_verify()` 函数验证的时候，不需要额外储存盐值或者算法的信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `PASSWORD_BCRYPT` 算法的 `cost` 选项的默认值从 `10` 增加到 `12`。 |
| 8.3.0 | 当由于盐值生成失败而抛出 ValueError 时， `password_hash()` 现在会将底层的 Random\RandomException 作为 Exception::$previous 异常。 |
| 8.0.0 | 失败时 `password_hash()` 不再返回 `false`，如果密码散列算法无效，则会抛出 `ValueError`，如果密码散列因未知错误失败，则会抛出 `Error`。 |
| 8.0.0 | 参数 `$algo` 可以为 null。 |
| 7.4.0 | 现在 `$algo` 参数可支持 `string` 类型，但为了向后兼容也支持 `integer` 类型。 |
| 7.4.0 | 扩展 sodium 提供了 Argon2 密码的替代实现。 |
| 7.3.0 | 增加 `PASSWORD_ARGON2ID`，支持 Argon2id 密码算法。 |
| 7.2.0 | 增加 `PASSWORD_ARGON2I`，支持 Argon2i 密码算法。 |

## 示例

**`password_hash()` 示例**

```php


<?php
echo password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
?>

    
```

以上示例的输出类似于：

```text


$2y$12$4Umg0rCJwMswRw/l.SwHvuQV01coP0eWmGzd61QH2RvAOMANUBGC.

    
```

**`password_hash()` 手动设置 cost 的示例**

```php


<?php
$options = [
    // Increase the bcrypt cost from 12 to 13.
    'cost' => 13,
];
echo password_hash("rasmuslerdorf", PASSWORD_BCRYPT, $options);
?>

    
```

以上示例的输出类似于：

```text


$2y$13$xeDfQumlmdm0Sco.4qmH1OGfUUmOcuRmfae0dPJhjX1Bq0yYhqbNi

    
```

**寻找最佳 cost 的 `password_hash()` 示例**

该代码将会基准测试机器，来确定可以使用多高的 cost 而不会影响用户体验。 建议设置最高的 cost，前提是不会减慢机器需要执行的其他操作。 11 是一个不错的基线，如果机器足够快，更多的 cost 更好。 下面的代码目标是 ≤ 350 毫秒的拉伸时间（stretching time），这是处理交互式登录的系统的适当延迟。

```php


<?php
$timeTarget = 0.350; // 350 毫秒（milliseconds） 

$cost = 11;
do {
    $cost++;
    $start = microtime(true);
    password_hash("test", PASSWORD_BCRYPT, ["cost" => $cost]);
    $end = microtime(true);
} while (($end - $start) < $timeTarget);

echo "Appropriate Cost Found: " . $cost - 1;
?>

    
```

以上示例的输出类似于：

```text


Appropriate Cost Found: 13

    
```

**使用 Argon2i 的 `password_hash()` 示例**

```php


<?php
echo 'Argon2i hash: ' . password_hash('rasmuslerdorf', PASSWORD_ARGON2I);
?>

    
```

以上示例的输出类似于：

```text


Argon2i hash: $argon2i$v=19$m=1024,t=2,p=2$YzJBSzV4TUhkMzc3d3laeg$zqU/1IN0/AogfP4cmSJI1vc8lpXRW9/S0sYY2i2jHT0

    
```

## 注释

> 强烈建议不要为此函数提供显式的盐值（salt）。 如果没有指定盐值（salt），将自动创建一个安全的盐值（salt）。
>
> 提供 `salt` 选项在 PHP 7.0.0 中会生成一个弃用（deprecated）警告。 在 PHP 8.0.0 中，显式提供盐值（salt）的支持已被删除。

> 建议在使用的机器上测试此函数，调整 cost 参数，使得函数执行时间小于 350 毫秒，适合交互式登录。 上面示例中的脚本将帮助选择适合给定机器的 bcrypt cost。

> 这个函数更新支持的算法时（或修改默认算法），必定会遵守以下规则：
>
> - 任何内核中的新算法必须在经历一次 PHP 完整发行才能成为默认算法。 比如，在 PHP 7.5.5 中添加的新算法，在 PHP 7.7 之前不能成为默认算法 （由于 7.6 是第一个完整发行版）。 但如果是在 7.6.0 里添加的不同算法，在 7.7.0 里也可以成为默认算法。
> - 仅仅允许在完整发行版中修改默认算法（比如 7.3.0, 8.0.0，等等），不能是在修订版。 唯一的例外是：在当前默认算法里发现了紧急的安全威胁。

## 参见

`password_verify()` `password_needs_rehash()` `crypt()` `sodium_crypto_pwhash_str()`
