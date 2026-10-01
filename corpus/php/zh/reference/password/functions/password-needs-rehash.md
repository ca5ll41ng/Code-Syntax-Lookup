---
id: "zh-php-function-function-password-needs-rehash"
language: "php"
lang: "zh"
category: "function"
name: "password_needs_rehash"
title: "检测散列值是否匹配指定的选项"
signature: "bool password_needs_rehash(string $hash, string|int|null $algo, array $options = [])"
module: "password"
source_url: "https://www.php.net/manual/zh/function.password-needs-rehash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测散列值是否匹配指定的选项

## 说明

```php
bool password_needs_rehash(string $hash, string|int|null $algo, array $options = [])
```

此函数检测指定的散列值是否实现了提供的算法和选项。 如果没有，需要重新生成散列值。

## 参数

- **`$hash`** — 一个由 `password_hash()` 创建的散列值。
- **`$algo`** — 一个用来在散列密码时指示算法的密码算法常量。
- **`$options`** — 一个包含有选项的关联数组。详细的参数说明，请参考文档 密码算法常数。

## 返回值

如果散列需要重新生成才能匹配指定的 `$algo` 和 `$options`， 则返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 现在 `$algo` 参数可以支持 `string` 类型，但为了向后兼容性，同时支持 `integer` 类型。 |

## 示例

**`password_needs_rehash()`用法**

```php


<?php

$password = 'rasmuslerdorf';
$hash = '$2y$12$4Umg0rCJwMswRw/l.SwHvuQV01coP0eWmGzd61QH2RvAOMANUBGC.';

$algorithm = PASSWORD_BCRYPT;
// bcrypt 的成本参数随着硬件的改进而可能发生变化
$options = ['cost' => 13];

// 根据明文密码验证储存的散列
if (password_verify($password, $hash)) {
    // 检查算法或选项是否已经更改
    if (password_needs_rehash($hash, $algorithm, $options)) {
        // 如果是这样，则创建新散列，替换旧散列
        $newHash = password_hash($password, $algorithm, $options);
        
        // 使用 $newHash 更新用户记录
    }

    // 执行登录
}
?>

    
```
