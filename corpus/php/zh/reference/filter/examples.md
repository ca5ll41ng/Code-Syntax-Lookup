---
id: "zh-php-guide-filter-examples"
language: "php"
lang: "zh"
category: "guide"
name: "filter.examples"
title: "示例"
module: "filter"
source_url: "https://www.php.net/manual/zh/filter.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 验证

**使用 `filter_var()` 验证电子邮件地址**

```php


<?php
$email_a = 'joe@example.com';
$email_b = 'bogus';

if (filter_var($email_a, FILTER_VALIDATE_EMAIL)) {
    echo "Email address '$email_a' is considered valid.\n";
}
if (filter_var($email_b, FILTER_VALIDATE_EMAIL)) {
    echo "Email address '$email_b' is considered valid.\n";
} else {
    echo "Email address '$email_b' is considered invalid.\n";
}
?>

   
```

以上示例会输出：

```text


Email address 'joe@example.com' is considered valid.
Email address 'bogus' is considered invalid.

   
```

**使用 `filter_var()` 验证 IP 地址**

```php


<?php
$ip_a = '127.0.0.1';
$ip_b = '42.42';

if (filter_var($ip_a, FILTER_VALIDATE_IP)) {
    echo "IP address '$ip_a' is considered valid.";
}
if (filter_var($ip_b, FILTER_VALIDATE_IP)) {
    echo "IP address '$ip_b' is considered valid.";
}
?>

   
```

以上示例会输出：

```text


IP address '127.0.0.1' is considered valid.

   
```

**传递选项到 `filter_var()`**

```php


<?php
$int_a = '1';
$int_b = '-1';
$int_c = '4';
$options = array(
    'options' => array(
        'min_range' => 0,
        'max_range' => 3,
    )
);
if (filter_var($int_a, FILTER_VALIDATE_INT, $options) !== FALSE) {
    echo "Integer A '$int_a' is considered valid (between 0 and 3).\n";
}
if (filter_var($int_b, FILTER_VALIDATE_INT, $options) !== FALSE) {
    echo "Integer B '$int_b' is considered valid (between 0 and 3).\n";
}
if (filter_var($int_c, FILTER_VALIDATE_INT, $options) !== FALSE) {
    echo "Integer C '$int_c' is considered valid (between 0 and 3).\n";
}

$options['options']['default'] = 1;
if (($int_c = filter_var($int_c, FILTER_VALIDATE_INT, $options)) !== FALSE) {
    echo "Integer C '$int_c' is considered valid (between 0 and 3).";
}
?>

   
```

以上示例会输出：

```text


Integer A '1' is considered valid (between 0 and 3).
Integer C '1' is considered valid (between 0 and 3).

   
```

## 清理

**清理和验证电子邮件地址**

```php


<?php
$a = 'joe@example.org';
$b = 'bogus - at - example dot org';
$c = '(bogus@example.org)';

$sanitized_a = filter_var($a, FILTER_SANITIZE_EMAIL);
if (filter_var($sanitized_a, FILTER_VALIDATE_EMAIL)) {
    echo "This (a) sanitized email address is considered valid.\n";
}

$sanitized_b = filter_var($b, FILTER_SANITIZE_EMAIL);
if (filter_var($sanitized_b, FILTER_VALIDATE_EMAIL)) {
    echo "This sanitized email address is considered valid.";
} else {
    echo "This (b) sanitized email address is considered invalid.\n";
}

$sanitized_c = filter_var($c, FILTER_SANITIZE_EMAIL);
if (filter_var($sanitized_c, FILTER_VALIDATE_EMAIL)) {
    echo "This (c) sanitized email address is considered valid.\n";
    echo "Before: $c\n";
    echo "After:  $sanitized_c\n";
}
?>

    
```

以上示例会输出：

```text


This (a) sanitized email address is considered valid.
This (b) sanitized email address is considered invalid.
This (c) sanitized email address is considered valid.
Before: (bogus@example.org)
After: bogus@example.org

    
```
